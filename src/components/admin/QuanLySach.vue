<template>
    <div class="container mt-4">
        <div class="card shadow-lg">
            <div class="card-header bg-primary text-white rounded-top">
                <div class="d-flex justify-content-between align-items-center">
                    <h5 class="mb-0">Danh Mục Sách</h5>
                    <button class="btn btn-light text-primary shadow-sm" data-bs-toggle="modal"
                        data-bs-target="#addModal">
                        <i class="fas fa-plus me-1"></i> Thêm Sách
                    </button>
                </div>
            </div>
            <div class="card-body">
                <div class="table-responsive">
                    <table class="table table-bordered table-hover align-middle shadow-sm">
                        <thead class="table-light">
                            <tr>
                                <th colspan="100%">
                                    <div class="input-group">
                                        <input type="text" class="form-control rounded-start" placeholder="Tìm kiếm...">
                                        <button class="btn btn-primary rounded-end" type="button">
                                            <i class="bx bx-search"></i> Tìm
                                        </button>
                                    </div>
                                </th>
                            </tr>
                            <tr>
                                <th class="text-center">#</th>
                                <th class="text-center">Hình Ảnh</th>
                                <th class="text-center">Tên Sách</th>
                                <th class="text-center">Tác Giả</th>
                                <th class="text-center">Mô Tả Ngắn</th>
                                <th class="text-center">Giá Tiền</th>
                                <th class="text-center">Nhà Xuất Bản</th>
                                <th class="text-center">Số Lượng</th>
                                <th class="text-center">Trạng Thái</th>
                                <th class="text-center">Thể Loại</th>
                                <th class="text-center">Vị Trí</th>
                                <th class="text-center">Hành Động</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="table-row-hover">
                                <td class="text-center">1</td>
                                <td class="text-center">
                                    <img src="https://salt.tikicdn.com/cache/280x280/ts/product/b8/9e/8b/4e76b82bb6ddd4f25e86c961f98d5ab9.png"
                                        alt="Book Image" class="img-fluid rounded shadow-sm"
                                        style="max-width: 80px; height: auto;">
                                </td>
                                <td>Vì cậu là bạn nhỏ của tớ</td>
                                <td class="text-center">Tun Phạm</td>
                                <td class="text-center align-middle">
                                    <button class="btn btn-outline-info" data-bs-toggle="modal"
                                        data-bs-target="#moTaModal">
                                        <i class="bx bx-blanket me-0"></i>
                                    </button>
                                </td>
                                <td class="text-center">80.000 VNĐ</td>
                                <td class="text-center">Kim Đồng</td>
                                <td class="text-center">4</td>
                                <td class="align-middle text-center">
                                    <button class="btn btn-success btn-sm w-100 shadow-sm">Đang Còn</button>
                                </td>
                                <td class="text-center">Comic</td>
                                <td class="text-center">Khu A Kệ 7 Ngăn 44</td>
                                <td class="text-center">
                                    <button class="btn btn-sm btn-primary me-2 shadow-sm" data-bs-toggle="modal"
                                        data-bs-target="#editModal">
                                        <i class="fas fa-edit"></i> Chỉnh Sửa
                                    </button>
                                    <button class="btn btn-sm btn-danger shadow-sm" data-bs-toggle="modal"
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

    <!-- Modal thêm sách-->
    <div class="modal fade" id="addModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header bg-success text-white">
                <h5 class="modal-title" id="exampleModalLabel">Thêm Mới Sách</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <form>
                    <div class="row mb-3">
                        <div class="col-md-6">
                            <label for="imageInput" class="form-label">Hình Ảnh</label>
                            <input type="file" id="imageInput" class="form-control">
                        </div>
                        <div class="col-md-6">
                            <label for="nameInput" class="form-label">Tên Sách</label>
                            <input type="text" id="nameInput" class="form-control">
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-md-6">
                            <label for="authorInput" class="form-label">Tác Giả</label>
                            <input type="text" id="authorInput" class="form-control">
                        </div>
                        <div class="col-md-6">
                            <label for="priceInput" class="form-label">Giá Tiền</label>
                            <input type="text" id="priceInput" class="form-control">
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-md-6">
                            <label for="publisherInput" class="form-label">Nhà Xuất Bản</label>
                            <input type="text" id="publisherInput" class="form-control">
                        </div>
                        <div class="col-md-6">
                            <label for="quantityInput" class="form-label">Số Lượng</label>
                            <input type="number" id="quantityInput" class="form-control">
                        </div>
                    </div>
                    <div class="mb-3">
                        <label for="descriptionInput" class="form-label">Mô Tả Ngắn</label>
                        <textarea id="descriptionInput" class="form-control" rows="4"></textarea>
                    </div>
                    <div class="row mb-3">
                        <div class="col-md-6">
                            <label for="statusSelect" class="form-label">Trạng Thái</label>
                            <select id="statusSelect" class="form-select">
                                <option value="1">Đang còn</option>
                                <option value="0">Tạm Hết</option>
                            </select>
                        </div>
                        <div class="col-md-6">
                            <label for="categorySelect" class="form-label">Thể Loại</label>
                            <select id="categorySelect" class="form-select">
                                <option value="0">Thể loại 1</option>
                                <option value="1">Thể loại 2</option>
                            </select>
                        </div>
                    </div>
                    <div class="mb-3">
                        <label for="locationInput" class="form-label">Vị Trí</label>
                        <input type="text" id="locationInput" class="form-control">
                    </div>
                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                <button type="button" class="btn btn-success">Thêm Sách</button>
            </div>
        </div>
    </div>
</div>

    <!-- Modal chỉnh sửa-->
    <div class="modal fade" id="editModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header bg-warning text-white">
                <h5 class="modal-title" id="exampleModalLabel">Chỉnh Sửa Sách</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <form>
                    <div class="row mb-3">
                        <div class="col-md-6">
                            <label for="editImageInput" class="form-label">Hình Ảnh</label>
                            <input type="file" id="editImageInput" class="form-control">
                        </div>
                        <div class="col-md-6">
                            <label for="editNameInput" class="form-label">Tên Sách</label>
                            <input type="text" id="editNameInput" class="form-control">
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-md-6">
                            <label for="editAuthorInput" class="form-label">Tác Giả</label>
                            <input type="text" id="editAuthorInput" class="form-control">
                        </div>
                        <div class="col-md-6">
                            <label for="editPriceInput" class="form-label">Giá Tiền</label>
                            <input type="text" id="editPriceInput" class="form-control">
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-md-6">
                            <label for="editPublisherInput" class="form-label">Nhà Xuất Bản</label>
                            <input type="text" id="editPublisherInput" class="form-control">
                        </div>
                        <div class="col-md-6">
                            <label for="editQuantityInput" class="form-label">Số Lượng</label>
                            <input type="number" id="editQuantityInput" class="form-control">
                        </div>
                    </div>
                    <div class="mb-3">
                        <label for="editDescriptionInput" class="form-label">Mô Tả Ngắn</label>
                        <textarea id="editDescriptionInput" class="form-control" rows="4"></textarea>
                    </div>
                    <div class="row mb-3">
                        <div class="col-md-6">
                            <label for="editStatusSelect" class="form-label">Trạng Thái</label>
                            <select id="editStatusSelect" class="form-select">
                                <option value="1">Đang còn</option>
                                <option value="0">Tạm Hết</option>
                            </select>
                        </div>
                        <div class="col-md-6">
                            <label for="editCategorySelect" class="form-label">Thể Loại</label>
                            <select id="editCategorySelect" class="form-select">
                                <option value="0">Thể loại 1</option>
                                <option value="1">Thể loại 2</option>
                            </select>
                        </div>
                    </div>
                    <div class="mb-3">
                        <label for="editLocationInput" class="form-label">Vị Trí</label>
                        <input type="text" id="editLocationInput" class="form-control">
                    </div>
                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                <button type="button" class="btn btn-warning">Cập Nhật</button>
            </div>
        </div>
    </div>
</div>

    <!-- Modal xoá-->
    <div class="modal fade" id="deleteModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header bg-danger text-white">
                <h5 class="modal-title" id="exampleModalLabel">Xóa Sách</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <div class="alert alert-danger d-flex align-items-center">
                    <div class="me-3">
                        <i class="bx bxs-message-square-x text-dark" style="font-size: 2rem;"></i>
                    </div>
                    <div>
                        <h6 class="mb-1 text-dark fw-bold">Bạn có chắc chắn muốn xóa cuốn sách này không?</h6>
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

    <!-- Modal mô tả ngắn-->
    <div class="modal fade" id="moTaModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header bg-info text-white">
                <h5 class="modal-title" id="exampleModalLabel">Mô Tả Ngắn Sách</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <div class="text-justify" style="line-height: 1.8;">
                    <p>
                        <strong>“Vì cậu là bạn nhỏ của tớ”</strong> là cuốn sách đầu tay đánh dấu chặng hành trình phát triển, nỗ lực không ngừng nghỉ của Tác giả, MC, Content Creator Tun Phạm.
                    </p>
                    <p>
                        Nhờ vào góc nhìn và tâm tư sâu sắc, quyển sách như cẩm nang đồng hành cùng thế hệ trẻ vượt qua cơn bão “overthinking” với những cảm xúc, suy nghĩ tiêu cực trong các vấn đề khó khăn thường gặp.
                    </p>
                    <p>
                        GenZ có lẽ là một thế hệ luôn loay hoay, bối rối với câu hỏi: <em>“Liệu mình là ai và mình cần làm gì khi đến với thế giới này?”</em>. Tác giả sẽ cùng bạn bước thật vững trong chặng đường thấu hiểu thế giới nội tâm, đưa ra các giải pháp cho các vấn đề thường nhật như:
                    </p>
                    <ul>
                        <li>Làm thế nào để người hướng nội có thể giao tiếp, ứng xử tốt hơn.</li>
                        <li>Thực hành tư duy biết ơn để trân trọng thực tại và khởi đầu niềm hạnh phúc tự thân.</li>
                        <li>Kiểm soát cơn lốc “overthinking” khiến người trẻ tổn hao tâm lực.</li>
                        <li>Khám phá giá trị nội tại và bí kíp tự tạo cơ hội giúp bản thân “rực sáng”.</li>
                        <li>Và nhiều vấn đề phổ biến mà người trẻ đang bận tâm tìm lời giải.</li>
                    </ul>
                    <p>
                        Bạn sẽ không còn cô độc, vì đã có tác giả dìu dắt bạn vượt qua những khoảng tối của hành trình trưởng thành, giúp bạn không còn lạc lối và dần tìm thấy hướng đi mà bạn vốn có.
                    </p>
                    <p>
                        Mong bạn luôn nhớ rằng: <strong>“Thật may mắn khi chúng ta gặp được nhau ở kiếp này. Vậy nên đừng vì những chuyện nhỏ nhặt mà rời đi nhé.”</strong>
                    </p>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
            </div>
        </div>
    </div>
</div>

</template>
<script>
export default {

};
</script>
<style>
.table-row-hover:hover {
    background-color: #f8f9fa;
    transition: background-color 0.2s;
}

.btn:hover {
    opacity: 0.9;
    transition: opacity 0.2s;
}
</style>
