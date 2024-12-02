<template>
    <div class="container my-5">
        <div class="card shadow-lg">
            <div class="card-header bg-primary text-white">
                <h4 class="mt-3"><b>Tài Khoản Của Tôi</b></h4>
            </div>
            <div class="card-body">
                <div class="col-md-12 mb-4">
                    <img class="img-thumbnail rounded-circle shadow-sm"
                        style="width: 200px; height: 200px; border: 4px solid #0d6efd;"
                        src="https://cdnphoto.dantri.com.vn/03ThVSkHBa6HNnKeoNo6_Jg-0ZM=/thumb_w/1020/2023/01/07/avatar-2-1673054169138.jpg">
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <div class="mb-3">
                            <label for="first-name" class="form-label text-muted">Tên Người Dùng:</label>
                            <input type="text" class="form-control border-primary shadow-sm">
                        </div>
                        <div class="mb-4">
                            <label for="gender" class="form-label text-muted">Giới Tính:</label>
                            <div class="d-flex mt-1">
                                <div class="form-check me-3">
                                    <input class="form-check-input" type="radio" name="gender" id="genderMale">
                                    <label class="form-check-label" for="genderMale">Nam</label>
                                </div>
                                <div class="form-check me-3">
                                    <input class="form-check-input" type="radio" name="gender" id="genderFemale" checked>
                                    <label class="form-check-label" for="genderFemale">Nữ</label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="gender" id="genderOther">
                                    <label class="form-check-label" for="genderOther">Khác</label>
                                </div>
                            </div>
                        </div>
                        <div class="mb-3">
                            <label for="birth-date" class="form-label text-muted">Ngày Sinh:</label>
                            <input type="date" id="birth-date" class="form-control border-primary shadow-sm">
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="mb-3">
                            <label for="email" class="form-label text-muted">Email:</label>
                            <input type="email" id="email" class="form-control border-primary shadow-sm">
                        </div>
                        <div class="mb-3">
                            <label for="address" class="form-label text-muted">Địa Chỉ:</label>
                            <input type="text" id="address" class="form-control border-primary shadow-sm">
                        </div>
                        <div class="mb-3">
                            <label for="phone" class="form-label text-muted">Số Điện Thoại:</label>
                            <input type="text" id="phone" class="form-control border-primary shadow-sm">
                        </div>
                    </div>
                </div>
                <hr>
                <div >
                    <button type="button" class="btn btn-warning rounded-pill shadow-sm">
                        <i class="fa-solid fa-pen-to-square"></i> Cập Nhật
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
body {
    background-color: #f8f9fa;
}

.card-header {
    border-bottom: 2px solid #0d6efd;
}

.card {
    border-radius: 15px;
}

.btn:hover {
    opacity: 0.9;
    transform: scale(1.02);
}

input:focus {
    border-color: #0d6efd;
    box-shadow: 0px 0px 5px #0d6efd;
}
</style>
