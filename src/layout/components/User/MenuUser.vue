<template>
  <div class="nav-container primary-menu áđâs" :style="{ position: 'absolute' }">
        <div class="mobile-topbar-header">
            <div>
                <img src="../../assets/images/anhNen.png" class="logo-icon" alt="logo icon">
            </div>
            <div>
                <h4 class="logo-text">Rukada</h4>
            </div>
            <div class="toggle-icon ms-auto"><i class='bx bx-arrow-to-left'></i></div>
        </div>
        <nav class="navbar navbar-expand-xl w-100">
            <ul class="navbar-nav justify-content-start flex-grow-1 gap-1">
                <!-- Các mục khác -->
                <li class="nav-item">
                    <router-link class="nav-link" to="/user/lich-su-muon">
                        <div class="parent-icon"><i class="fa-solid fa-table"></i></div>
                        <div class="menu-title">Lịch sử mượn</div>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/user/thanh-toan">
                        <div class="parent-icon"><i class="fa-solid fa-table"></i></div>
                        <div class="menu-title">Thanh toán</div>
                    </router-link>
                </li>
<<<<<<< HEAD
                <li class="nav-item">
                    <router-link class="nav-link" to="/user/phan-loai">
                        <div class="parent-icon"><i class="fa-solid fa-book"></i></div>
                        <div class="menu-title">Thể Loại Sách</div>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/user/tac-gia">
                        <div class="parent-icon"><i class="fa-solid fa-user"></i></div>
                        <div class="menu-title">Tác Giả</div>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/user/nha-xuat-ban">
                        <div class="parent-icon"><i class="fa-solid fa-user"></i></div>
                        <div class="menu-title">Nhà Xuất Bản</div>
=======

                <li class="nav-item dropdown">
                    <a href="javascript:;" class="nav-link dropdown-toggle dropdown-toggle-nocaret"
                        data-bs-toggle="dropdown">
                        <div class="parent-icon"><i class="fa-solid fa-book-atlas"></i></div>
                        <div class="menu-title">Danh Mục Sách</div>
                    </a>
                    <ul class="dropdown-menu">
                        <li class="nav-item">
                            <router-link class="nav-link mt-2" to="/user/danh-muc-sach">
                                <div class="parent-icon"><i class="fa-solid fa-book-atlas"></i></div>
                                <div class="menu-title">Sách</div>
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link mt-2" to="/user/chi-tiet-sach">
                                <div class="parent-icon"><i class="fa-solid fa-calendar-days"></i></div>
                                <div class="menu-title">Chi Tiết Sách</div>
                            </router-link>
                        </li>
                    </ul>
                </li>

                <li class="nav-item">
                    <router-link class="nav-link" to="/user/quan-ly-tai-khoan-ca-nhan">
                        <div class="parent-icon"><i class="fa-regular fa-id-card"></i></div>
                        <div class="menu-title">Quản Lý Tài Khoản Cá Nhân</div>
>>>>>>> a2790554c25f6be49c77cf4df903b7317f21810a
                    </router-link>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
export default {
  // No logic needed for this template
};
</script>

<style scoped>
.nav-container.primary-menu {
  background-color: rgb(173, 216, 230); /* Light blue background */
}

.navbar-nav .nav-link {
  color: #000; /* Adjust text color */
  font-weight: 600;
}

.navbar-nav .nav-item {
  margin-right: 10px; /* Add space between menu items */
}

/* Dropdown styling */
.nav-item .dropdown-menu {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #34495e;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease, top 0.3s ease;
  z-index: 1000;
}

.nav-item:hover .dropdown-menu {
  display: block;
  opacity: 1;
  pointer-events: auto;
  top: 110%; /* Adjust to avoid clipping */
}

/* Hover effect for menu items */
.nav-link:hover {
  background-color: #3a7bd5; /* Blue hover effect */
  border-radius: 5px;
}

.dropdown-item:hover {
  background-color: #4caf50; /* Green background on hover */
  color: white;
  border-radius: 5px;
}

/* Adjust logo size */
.logo-icon {
  width: 50px;
  height: 50px;
}
</style>
