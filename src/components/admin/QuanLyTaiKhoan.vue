<template>
    <div class="row">
        <div class="col-lg-4 col-md-12 mb-4">
            <div class="card shadow">
                <div class="card-header bg-primary text-white">
                    <h5 class="mb-0">Thêm Mới Tài Khoản</h5>
                </div>
                <div class="card-body">
                    <label class="form-label">Tên Người Dùng</label>
                    <input type="text" class="form-control mb-3" placeholder="Nhập tên người dùng">

                    <label class="form-label">Email</label>
                    <input type="email" class="form-control mb-3" placeholder="Nhập email">

                    <label class="form-label">Địa Chỉ</label>
                    <input type="text" class="form-control mb-3" placeholder="Nhập địa chỉ">

                    <label class="form-label">Ngày Sinh</label>
                    <input type="date" class="form-control mb-3">

                    <label class="form-label">Số Điện Thoại</label>
                    <input type="number" class="form-control mb-3" placeholder="Nhập số điện thoại">

                    <label class="form-label">Hình Ảnh</label>
                    <input type="file" class="form-control mb-3">

                    <label class="form-label">Giới Tính</label>
                    <select class="form-select mb-3">
                        <option value="2">Nam</option>
                        <option value="1">Nữ</option>
                        <option value="0">Khác</option>
                    </select>
                </div>
                <div class="card-footer text-end">
                    <button class="btn btn-success px-4">
                        <i class="fas fa-plus"></i> Thêm Mới
                    </button>
                </div>
            </div>
        </div>

        <div class="col-lg-8 col-md-12">
            <div class="card shadow">
                <div class="card-header bg-secondary text-white">
                    <h5 class="mb-0">Danh Sách Tài Khoản</h5>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-bordered table-hover align-middle">
                            <thead class="table-dark">
                                <tr>
                                    <th colspan="100%">
                                        <div class="input-group">
                                            <input type="text" class="form-control" placeholder="Tìm kiếm...">
                                            <button class="btn btn-outline-light bg-success text-white" type="button">
                                                <i class="bx bx-search"></i> Tìm
                                            </button>
                                        </div>
                                    </th>
                                </tr>
                                <tr>
                                    <th class="text-center">#</th>
                                    <th class="text-center">Hình Ảnh</th>
                                    <th class="text-center">Tên Người Dùng</th>
                                    <th class="text-center">Giới Tính</th>
                                    <th class="text-center">Ngày Sinh</th>
                                    <th class="text-center">Email</th>
                                    <th class="text-center">Địa Chỉ</th>
                                    <th class="text-center">Số Điện Thoại</th>
                                    <th class="text-center">Xóa Tài Khoản</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="text-center">1</td>
                                    <td class="text-center">
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_Vyu8_6buiIU8QQ9i-kHHxU5gK_L07qQygijKKUVQwrxA-pgXJ6frE843_nG5uMLLD9E&usqp=CAU"
                                            class="img-fluid rounded" alt="Hình ảnh"
                                            style="width: 100px; height: auto;">
                                    </td>
                                    <td>Tun Phạm</td>
                                    <td class="text-center">Nam</td>
                                    <td class="text-center">29/11/2024</td>
                                    <td>tunpham@gmail.com</td>
                                    <td>Hòa Khánh - Đà Nẵng</td>
                                    <td class="text-center">0123012123</td>
                                    <td class="text-center">
                                        <button class="btn btn-sm btn-danger" data-bs-toggle="modal"
                                            data-bs-target="#deleteModal">
                                            <i class="fas fa-trash-alt"></i> Xóa
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Modal xoá-->
    <div class="modal fade" id="deleteModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header bg-danger text-white">
                    <h5 class="modal-title" id="exampleModalLabel">Xóa Tài Khoản</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="alert alert-danger d-flex align-items-center">
                        <div class="me-3">
                            <i class="bx bxs-message-square-x text-dark" style="font-size: 2rem;"></i>
                        </div>
                        <div>
                            <h6 class="mb-1 text-dark fw-bold">Bạn có chắc chắn muốn xóa tài khoản này không?</h6>
                            <p class="mb-0 text-dark"><strong>LƯU Ý:</strong> Hành động này sẽ không thể hoàn tác!</p>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                    <button type="button" class="btn btn-danger">Xác Nhận Xóa</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {

};
</script>
<style></style>
