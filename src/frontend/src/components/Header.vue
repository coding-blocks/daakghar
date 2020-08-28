<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a href="/" id="ember5" class="navbar-brand ember-view"> <img src="/images/logo-43dd0ede19c18f0f0aeadceab04cc364.png" height="30" class="d-inline-block align-top" alt="">
        </a> <button class="navbar-toggler navbar-toggler-right" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" type="button">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <div class="navbar-nav">
                <a href="/" id="ember8" class="nav-item nav-link ember-view"> Home
                </a>
                <div class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="courseDropdown" role="button" data-toggle="dropdown">
                        Course Edits
                    </a>
                    <div class="dropdown-menu" aria-labelledby="courseDropdown">
                        <a href="/courses" id="ember9" class="dropdown-item ember-view"> Courses
                        </a><a href="/contents" id="ember10" class="dropdown-item ember-view"> Course Contents
                        </a><a href="/multiEdit" id="ember11" class="dropdown-item ember-view"> Multi Edit
                        </a><a href="/contents/createdBy/124247" id="ember12" class="dropdown-item ember-view"> My Contents
                        </a> </div>
                </div>
                <a href="/tags" id="ember13" class="nav-item nav-link ember-view"> Tags
                </a><a href="/announcements" id="ember14" class="nav-item nav-link ember-view"> Announcements
                </a>
                <a href="/notifications" id="ember15" class="nav-item nav-link ember-view"> Notifications
                </a>
                <a href="/instructor" id="ember19" class="nav-item nav-link ember-view"> Instructors
                </a>
                <div class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="courseDropdown" role="button" data-toggle="dropdown">
                        Enroll
                    </a>
                    <div class="dropdown-menu" aria-labelledby="courseDropdown">
                        <a href="/otpEnroll" id="ember20" class="dropdown-item ember-view"> Otp Enroll
                        </a><a href="/enrollments" id="ember21" class="dropdown-item ember-view"> Enrollments
                        </a> </div>
                </div>
                <div class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown">
                        Home Page
                    </a>
                    <div class="dropdown-menu" aria-labelledby="courseDropdown">
                        <a href="/home-page" id="ember22" class="dropdown-item ember-view"> Webp
                        </a><a href="/home-page/featured-tags" id="ember23" class="dropdown-item ember-view"> Featured Tags
                        </a><a href="/home-page/carousel" id="ember24" class="dropdown-item ember-view"> Carousel Cards
                        </a> </div>
                </div>
                <div class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown">
                        Moderators
                    </a>
                    <div class="dropdown-menu" aria-labelledby="courseDropdown">
                        <a href="/moderators" id="ember25" class="dropdown-item ember-view"> Manage Moderators
                        </a><a href="/moderators/clubs" id="ember26" class="dropdown-item ember-view"> Manage Clubs
                        </a><a href="/moderators/inactive" id="ember27" class="dropdown-item ember-view"> Inactive TAs
                        </a> </div>
                </div>
                <a href="/doubts" id="ember16" class="nav-item nav-link ember-view"> Doubts
                </a>
                <a href="/stats" id="ember17" class="nav-item nav-link ember-view"> Statistics
                </a>
                <li class="nav-item">
                    <a class="nav-link" href="https://hire-admin.codingblocks.com" role="button">
                        Hiring Blocks
                    </a>
                </li>
            </div>
            <button class="btn btn-danger" type="button" data-ember-action="" data-ember-action-18="18">
                Logout
            </button>
        </div>
    </nav>
</template>
<script>
export default {
    name: 'Header',
}
</script>
<style scoped>

</style>