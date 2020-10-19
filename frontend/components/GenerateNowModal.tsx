import React from "react";
import Modal from "react-modal";
import Api from "../services/api";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

interface LayoutType {
  name: string;
  content: string;
  height?: number | string;
  params: [];
  width?: number | string;
  _id: number;
}

interface Props {
  layout: LayoutType;
  isOpen: boolean;
  closeModal: () => void;
}

const GenerateNowModal: React.FC<Props> = (props) => {
  const layout = props.layout;

  //FIXME: any type of acc
  const [substitutions, setSubstitutions] = React.useState(
    layout.params.reduce((acc: any, curr: string) => {
      acc[curr] = "";
      return acc;
    }, {})
  );
  const [loading, setLoading] = React.useState(false);
  const [certificateUrl, setCertificateUrl] = React.useState(null);

  //FIXME: any type of e
  const handleChange = (e: any) => {
    setSubstitutions({
      ...substitutions,
      [e.target.name]: e.target.value,
    });
  };

  const submitDetails = async () => {
    setCertificateUrl(null);
    setLoading(true);
    try {
      const response = await Api.post("/certificates/generate", {
        layoutId: layout._id,
        substitutions,
      });
      const url = response.data.url;
      setCertificateUrl(url);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal
      isOpen={props.isOpen}
      onRequestClose={props.closeModal}
      style={customStyles}
      contentLabel="Example Modal"
      ariaHideApp={false}
    >
      <div className="container">
        <h3>Certificate Details</h3>

        {layout.params.map((param, i) => {
          return (
            <div className="mt-3" key={i}>
              <span>{param}</span>
              <input
                className="input-text"
                type="text"
                name={param}
                onChange={handleChange}
                value={substitutions[param]}
              />
            </div>
          );
        })}

        <div className="button-solid white mt-3">
          <button type="submit" onClick={submitDetails} disabled={loading}>
            {loading ? "Generating" : "Submit"}
          </button>
        </div>

        <div>
          {certificateUrl && (
            <a className="red mt-3" href={certificateUrl || ""}>
              {certificateUrl}
            </a>
          )}
        </div>
      </div>
    </Modal>
  );
};

export default GenerateNowModal;
