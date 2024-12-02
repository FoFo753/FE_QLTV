import { createRouter, createWebHistory } from "vue-router"; 

const routes = [
    {
        path : '/admin/phieu-muon',
        component: ()=>import('../components/admin/PhieuMuon.vue')
    },
    {
        path : '/admin/hoa-don',
        component: ()=>import('../components/admin/HoaDon.vue')
    },
    {
        path : '/admin/quan-ly-sach',
        component: ()=>import('../components/admin/QuanLySach.vue')
    },
    {
        path : '/admin/quan-ly-tai-khoan',
        component: ()=>import('../components/admin/QuanLyTaiKhoan.vue')
    },
    {
        path: "/user/lich-su-muon",
        component: () => import("../components/User/LichSuMuon.vue"),
        meta: { layout: "user" },
    },
    {
        path: "/user/thanh-toan",
        component: () => import("../components/User/ThanhToan.vue"),
        meta: { layout: "user" },
    },
    {
        path: "/user/danh-muc-sach",
        component: () => import("../components/User/DanhMucSach.vue"),
        meta: { layout: "user" },
    },
    {
        path: "/user/chi-tiet-sach",
        component: () => import("../components/User/ChiTietSach.vue"),
        meta: { layout: "user" },
    },
    {
        path: "/user/quan-ly-tai-khoan-ca-nhan",
        component: () => import("../components/User/QuanLyTaiKhoanCaNhan.vue"),
        meta: { layout: "user" },
    },
   
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router