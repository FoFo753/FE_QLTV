<template>
    <nav class="navbar navbar-expand custom-navbar">
        <div class="topbar-logo-header">
            <div class="logo-container">
        <div>
            <img src="https://i.pinimg.com/originals/67/08/fc/6708fcc75056864713bb1675dca82034.gif" class="logo-icon" alt="logo icon">
        </div>
        <div>
            <h4 class="logo-text">THƯ VIỆN</h4>
        </div>
    </div>
        </div>
        <div class="mobile-toggle-menu"><i class='bx bx-menu'></i></div>
        <div class="search-bar flex-grow-1">
            <div class="position-relative search-bar-box">
                <input type="text" class="form-control search-control" placeholder="Type to search..."> 
                <span class="position-absolute top-50 search-show translate-middle-y"><i class='bx bx-search'></i></span>
                <span class="position-absolute top-50 search-close translate-middle-y"><i class='bx bx-x'></i></span>
            </div>
        </div>
        <div class="top-menu ms-auto">
            <ul class="navbar-nav align-items-center">
                <li class="nav-item mobile-search-icon">
                    <a class="nav-link" href="#"> <i class='bx bx-search'></i></a>
                </li>
                <li class="nav-item dropdown dropdown-large">
                    <a class="nav-link dropdown-toggle dropdown-toggle-nocaret" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"> <i class='bx bx-category'></i></a>
                    <div class="dropdown-menu dropdown-menu-end">
                        <div class="row row-cols-3 g-3 p-3">
                            <div class="col text-center">
                                <div class="app-box mx-auto bg-gradient-cosmic text-white"><i class='bx bx-group'></i></div>
                                <div class="app-title">Teams</div>
                            </div>
                        </div>
                    </div>
                </li>
                <li class="nav-item dropdown dropdown-large">
                    <a class="nav-link dropdown-toggle dropdown-toggle-nocaret position-relative" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <span class="alert-count">7</span>
                        <i class='bx bx-bell'></i>
                    </a>
                    <div class="dropdown-menu dropdown-menu-end">
                        <a href="javascript:;">
                            <div class="msg-header">
                                <p class="msg-header-title">Notifications</p>
                                <p class="msg-header-clear ms-auto">Marks all as read</p>
                            </div>
                        </a>
                        <div class="header-notifications-list">
                            <a class="dropdown-item" href="javascript:;">
                                <div class="d-flex align-items-center">
                                    <div class="notify bg-light-primary text-primary"><i class="bx bx-group"></i></div>
                                    <div class="flex-grow-1">
                                        <h6 class="msg-name">New Customers<span class="msg-time float-end">14 Sec ago</span></h6>
                                        <p class="msg-info">5 new user registered</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <a href="javascript:;">
                            <div class="text-center msg-footer">View All Notifications</div>
                        </a>
                    </div>
                </li>
                <li class="nav-item dropdown dropdown-large">
                    <a class="nav-link dropdown-toggle dropdown-toggle-nocaret position-relative" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <span class="alert-count">8</span>
                        <i class='bx bx-comment'></i>
                    </a>
                    <div class="dropdown-menu dropdown-menu-end">
                        <a href="javascript:;">
                            <div class="msg-header">
                                <p class="msg-header-title">Messages</p>
                                <p class="msg-header-clear ms-auto">Marks all as read</p>
                            </div>
                        </a>
                        <div class="header-message-list">
                            <a class="dropdown-item" href="javascript:;">
                                <div class="d-flex align-items-center">
                                    <div class="user-online">
                                        <img src="../../assets/images/avatars/avatar-1.png" class="msg-avatar" alt="user avatar">
                                    </div>
                                    <div class="flex-grow-1">
                                        <h6 class="msg-name">Daisy Anderson <span class="msg-time float-end">5 sec ago</span></h6>
                                        <p class="msg-info">The standard chunk of lorem</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <a href="javascript:;">
                            <div class="text-center msg-footer">View All Messages</div>
                        </a>
                    </div>
                </li>
            </ul>
        </div>
        <div class="user-box dropdown">
            <a class="d-flex align-items-center nav-link dropdown-toggle dropdown-toggle-nocaret" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <img src="https://bizweb.dktcdn.net/100/418/981/products/z4844324734873-a402995347fddf76e21b8dc763f4a6e1-1699018261248.jpg?v=1699018265900" class="user-img" alt="user avatar">
                <div class="user-info ps-3">
                    <p class="user-name mb-0">Huynh Hieu</p>
                    <p class="designattion mb-0">Web Designer</p>
                </div>
            </a>
            <ul class="dropdown-menu dropdown-menu-end">
                <li>
                    <a class="dropdown-item" href="javascript:;"><i class='bx bx-log-out-circle'></i><span>Đăng Xuất</span></a>
                </li>
                <li>
                    <a class="dropdown-item" href="javascript:;"><i class="fa-solid fa-right-from-bracket"></i><span>Đăng Xuất Tất Cả Thiết Bị</span></a>
                </li>
            </ul>
            <li class="nav-item">
                    <router-link class="nav-link" to="/admin/phieu-muon">
                        <div class="menu-title">❤️</div>
                    </router-link>
                </li>
        </div>
    </nav>
</template>

<script>
export default {
  // Your script logic here if needed
}
</script>

<style scoped>
.custom-navbar {
    background-color: rgb(115, 183, 206);; /* Change to desired color (green in this case) */
}

.logo-container {
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 20px;
            background-color: #f8f9fa; /* Light background */
        }

        /* Styling the logo image */
        .logo-icon {
            width: 80px;
            height: auto;
        }

        /* Styling the text */
        .logo-text {
            font-family: 'Lora', serif;
            font-weight: 700;
            font-size: 2rem; /* Larger text */
            color: #333; /* Dark color */
            margin-left: 15px;
            letter-spacing: 2px; /* Spacing between letters */
        }
</style>
