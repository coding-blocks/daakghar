interface UserAccountType {
  apparelGoodiesSize?: "S" | "M" | "L" | "XL";
  createdAt: string;
  deletedAt?: string;
  email: string;
  exp: number;
  firstname: string;
  gender: "MALE" | "FEMALE";
  graduationYear: number;
  iat: number;
  id: number | string;
  lastname: string;
  marketing_meta: any;      //FIXME: ask for this type
  mobile_number: string;
  photo?: string; // minio.cb.lk photo url
  referralCode: string;
  referredBy: any;          //FIXME: ask for this type
  role: string;
  updatedAt: string;
  username: string;
  verifiedemail: string;
  verifiedmobile?: string;
  whatsapp_number?: string;
}

type UserType = UserAccountType | {}

export default UserType