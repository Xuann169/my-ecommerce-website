// ==================== SLIDER BANNER ====================
const slides = document.querySelector(".slides");
const slideItems = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let index = 0;

function showSlide(n) {
  index = (n + slideItems.length) % slideItems.length;
  if (slides) {
    slides.style.transform = `translateX(-${index * 100}%)`;
  }
}

if (prevBtn && nextBtn) {
  prevBtn.addEventListener("click", () => showSlide(index - 1));
  nextBtn.addEventListener("click", () => showSlide(index + 1));

  // Tự động chạy mỗi 5 giây
  setInterval(() => showSlide(index + 1), 5000);
}

// ==================== POPUP LIÊN HỆ ====================
function openPopup() {
  const overlay = document.getElementById("overlay");
  if (overlay) {
    overlay.style.display = "flex";
  }
}

function closePopup() {
  const overlay = document.getElementById("overlay");
  if (overlay) {
    overlay.style.display = "none";
  }
}

// Cho phép click ra ngoài để đóng popup
document.addEventListener("DOMContentLoaded", function () {
  const overlay = document.getElementById("overlay");
  if (overlay) {
    overlay.addEventListener("click", function (e) {
      if (e.target.id === "overlay") {
        closePopup();
      }
    });
  }
});

// ==================== DỮ LIỆU CÔNG VIỆC ====================
const jobDetails = {
  // Job 1: Chuyên Viên Kinh Doanh Fulltime
  "nhan-vien-ke-toan-1": {
    title: "Chuyên Viên Kinh Doanh Fulltime",
    company: "CÔNG TY TNHH TRƯỜNG QUỐC TẾ PALFISH SINGAPORE - VIETNAM",
    location: "Thanh Xuân - Hà Nội",
    salary: "13 - 15 triệu VNĐ",
    logo: "anh/tienganh.webp",
    experience: "1-2 năm kinh nghiệm",
    level: "Nhân viên",
    deadline: "30/11/2024",
    description: [
      "Tìm kiếm và phát triển khách hàng tiềm năng trong lĩnh vực giáo dục quốc tế",
      "Tư vấn các khóa học tiếng Anh trực tuyến cho học viên",
      "Xây dựng và duy trì mối quan hệ với khách hàng hiện tại",
      "Triển khai các chiến lược kinh doanh để đạt chỉ tiêu doanh số",
      "Phối hợp với đội ngũ giáo viên để nâng cao chất lượng dịch vụ",
    ],
    requirements: [
      "Tốt nghiệp Cao đẳng/Đại học chuyên ngành Kinh tế, Marketing, Ngoại ngữ",
      "Có 1-2 năm kinh nghiệm kinh doanh trong lĩnh vực giáo dục (ưu tiên)",
      "Kỹ năng giao tiếp tốt, đam mê lĩnh vực giáo dục",
      "Khả năng làm việc độc lập và theo nhóm",
      "Có laptop và kết nối internet ổn định",
      "Ưu tiên ứng viên có trình độ tiếng Anh tốt",
    ],
    benefits: [
      "Lương cứng 8-10 triệu + hoa hồng (Tổng thu nhập: 13-15 triệu)",
      "Được đào tạo bài bản về sản phẩm và kỹ năng bán hàng",
      "Môi trường làm việc trẻ trung, năng động, chuyên nghiệp",
      "Cơ hội thăng tiến lên vị trí Trưởng nhóm kinh doanh",
      "Làm việc với đối tác quốc tế từ Singapore",
      "Được hưởng các chính sách phúc lợi theo quy định",
    ],
    contact: {
      name: "Phòng Nhân sự - Ms. Linh",
      phone: "024 1234 5678",
      email: "hr@palfish.edu.vn",
    },
  },

  // Job 2: Chuyên Viên Tư Vấn Bảo Hiểm
  "chuyen-vien-dvkh-1": {
    title: "Chuyên Viên Tư Vấn Bảo Hiểm Kênh Hợp Tác Ngân Hàng Vietinbank",
    company: "TNHH Manulife Việt Nam",
    location: "Hai Bà Trưng - Hà Nội",
    salary: "10 - 100 triệu VNĐ",
    logo: "anh/manulife.webp",
    experience: "Không yêu cầu kinh nghiệm",
    level: "Nhân viên",
    deadline: "25/12/2024",
    description: [
      "Tư vấn các sản phẩm bảo hiểm nhân thọ cho khách hàng qua kênh ngân hàng Vietinbank",
      "Tiếp cận và chăm sóc khách hàng tại các chi nhánh ngân hàng đối tác",
      "Phối hợp với nhân viên ngân hàng để giới thiệu sản phẩm bảo hiểm",
      "Theo dõi và quản lý hồ sơ khách hàng trong hệ thống",
      "Tham gia các khóa đào tạo nghiệp vụ bảo hiểm định kỳ",
    ],
    requirements: [
      "Tốt nghiệp từ Cao đẳng trở lên",
      "Kỹ năng giao tiếp tốt, tự tin trong công việc",
      "Có tinh thần học hỏi và mong muốn phát triển nghề nghiệp",
      "Không yêu cầu kinh nghiệm, được đào tạo từ đầu",
      "Có động lực làm việc với thu nhập không giới hạn",
      "Ưu tiên ứng viên có mối quan hệ rộng",
    ],
    benefits: [
      "Thu nhập không giới hạn: Lương cơ bản + hoa hồng hấp dẫn",
      "Được đào tạo chuyên sâu về bảo hiểm nhân thọ miễn phí",
      "Làm việc trong môi trường chuyên nghiệp hàng đầu",
      "Cơ hội thăng tiến rõ ràng: Chuyên viên - Trưởng nhóm - Quản lý",
      "Được cấp chứng chỉ hành nghề bảo hiểm",
      "Tham gia các chương trình du lịch, teambuilding hấp dẫn",
    ],
    contact: {
      name: "Quản lý Kinh doanh - Mr. David",
      phone: "024 8765 4321",
      email: "tuyendung@manulife.com.vn",
    },
  },

  // Job 3: Nhân viên Kế Toán Thuế
  "nhan-vien-ke-toan-2": {
    title: "Nhân viên Kế Toán Thuế",
    company: "TNHH Thương Mại Tổng hợp HTV (Cellphone S)",
    location: "Hoàn Kiếm - Hà Nội",
    salary: "13 - 15 triệu VNĐ",
    logo: "anh/cellphoneS.webp",
    experience: "1-3 năm kinh nghiệm",
    level: "Nhân viên",
    deadline: "20/11/2024",
    description: [
      "Thực hiện các nghiệp vụ kế toán thuế cho chuỗi bán lẻ điện thoại",
      "Lập và nộp báo cáo thuế GTGT, TNCN hàng tháng, quý",
      "Theo dõi công nợ nhà cung cấp và khách hàng",
      "Kiểm tra tính hợp lệ của hóa đơn đầu vào, đầu ra",
      "Phối hợp kiểm kê hàng hóa tồn kho định kỳ",
      "Lập báo cáo tài chính nội bộ cho Ban Giám đốc",
    ],
    requirements: [
      "Tốt nghiệp Cao đẳng/Đại học chuyên ngành Kế toán",
      "Có 1-3 năm kinh nghiệm kế toán thuế tại doanh nghiệp thương mại",
      "Thành thạo phần mềm kế toán MISA, FAST",
      "Nắm vững chính sách thuế, luật kế toán hiện hành",
      "Kỹ năng Excel tốt, cẩn thận, tỉ mỉ trong công việc",
      "Có thể làm việc trong môi trường bán lẻ năng động",
    ],
    benefits: [
      "Lương 13-15 triệu VNĐ, đánh giá tăng lương 6 tháng/lần",
      "Thưởng tháng 13, thưởng Lễ Tết theo chính sách công ty",
      "Được đào tạo nghiệp vụ kế toán chuyên sâu",
      "Môi trường làm việc trẻ trung, năng động",
      "Mua sản phẩm công ty với giá ưu đãi",
      "Cơ hội thăng tiến trong hệ thống chuỗi Cellphone S",
    ],
    contact: {
      name: "Phòng Hành chính Nhân sự",
      phone: "024 1357 2468",
      email: "hr@cellphones.com.vn",
    },
  },

  // Job 4: Giám đốc Marketing
  "chuyen-vien-dvkh-2": {
    title: "Giám đốc Marketing",
    company: "Cổ phần Đầu tư Hải Phát",
    location: "Hà Nội",
    salary: "35 - 40 triệu VNĐ",
    logo: "anh/haiphat.webp",
    experience: "5-7 năm kinh nghiệm",
    level: "Quản lý cấp cao",
    deadline: "15/12/2024",
    description: [
      "Xây dựng và triển khai chiến lược Marketing tổng thể cho tập đoàn",
      "Quản lý ngân sách Marketing và đo lường hiệu quả ROI",
      "Phát triển thương hiệu và định vị sản phẩm trên thị trường",
      "Lãnh đạo team Marketing gồm 10-15 nhân sự",
      "Phối hợp với các phòng ban để triển khai chiến dịch",
      "Phân tích thị trường và đối thủ cạnh tranh",
    ],
    requirements: [
      "Tốt nghiệp Đại học chuyên ngành Marketing, QTKD, Truyền thông",
      "Có 5-7 năm kinh nghiệm ở vị trí quản lý Marketing",
      "Thành thạo Digital Marketing, Brand Management",
      "Có portfolio về các chiến dịch Marketing thành công",
      "Kỹ năng lãnh đạo, quản lý team xuất sắc",
      "Khả năng phân tích dữ liệu và ra quyết định chiến lược",
    ],
    benefits: [
      "Lương 35-40 triệu VNĐ + thưởng KPI (có thể lên đến 60-70 triệu)",
      "Được tham gia quyết định chiến lược cấp cao",
      "Làm việc trong môi trường tập đoàn đa ngành nghề",
      "Xe công tác và các phúc lợi dành cho quản lý cấp cao",
      "Cơ hội tham gia các khóa đào tạo quản lý",
      "Chế độ phúc lợi cao cấp theo chính sách tập đoàn",
    ],
    contact: {
      name: "Ban Giám đốc",
      phone: "024 1122 3344",
      email: "board@haiphat.com.vn",
    },
  },

  // Job 5: Trưởng nhóm phát triển kinh doanh
  "nhan-vien-ke-toan-3": {
    title: "Trưởng nhóm phát triển kinh doanh (HN/HCM)",
    company: "TNHH SPX Express",
    location: "Ba Đình - Hà Nội",
    salary: "Thỏa thuận (20-30 triệu)",
    logo: "anh/spx.webp",
    experience: "3-5 năm kinh nghiệm",
    level: "Trưởng nhóm",
    deadline: "10/12/2024",
    description: [
      "Quản lý và phát triển đội ngũ kinh doanh 5-8 người",
      "Xây dựng kế hoạch kinh doanh và phân bổ chỉ tiêu cho team",
      "Tìm kiếm và phát triển đối tác vận chuyển lớn",
      "Phân tích thị trường logistics và đề xuất giải pháp",
      "Đào tạo và huấn luyện nhân viên kinh doanh mới",
      "Báo cáo kết quả kinh doanh cho Ban Giám đốc",
    ],
    requirements: [
      "Tốt nghiệp Đại học chuyên ngành Kinh tế, QTKD",
      "Có 3-5 năm kinh nghiệm kinh doanh, ít nhất 1 năm ở vị trí quản lý",
      "Có kinh nghiệm trong ngành logistics, vận chuyển (ưu tiên)",
      "Kỹ năng quản lý team, coaching và training",
      "Khả năng giao tiếp và đàm phán với đối tác lớn",
      "Có network rộng trong ngành vận chuyển, thương mại điện tử",
    ],
    benefits: [
      "Lương thỏa thuận 20-30 triệu + thưởng doanh số hấp dẫn",
      "Được làm việc trong môi trường startup năng động",
      "Cơ hội thăng tiến lên Quản lý kinh doanh vùng",
      "Được đào tạo kỹ năng quản lý chuyên sâu",
      "Tham gia các chương trình đào tạo của tập đoàn",
      "Chế độ phúc lợi đầy đủ theo luật Lao động",
    ],
    contact: {
      name: "Trưởng phòng Kinh doanh - Ms. Hằng",
      phone: "024 9999 8888",
      email: "career@spx.vn",
    },
  },

  // Job 6: Nhân viên kiểm soát chất lượng vận hành
  "chuyen-vien-dvkh-3": {
    title: "Nhân viên kiểm soát chất lượng vận hành",
    company: "Cổ phần giao hàng tiết kiệm",
    location: "Hoàng Mai - Hà Nội",
    salary: "7 - 10 triệu VNĐ",
    logo: "anh/ghtk.webp",
    experience: "Không yêu cầu kinh nghiệm",
    level: "Nhân viên",
    deadline: "05/12/2024",
    description: [
      "Giám sát và đánh giá chất lượng dịch vụ giao hàng",
      "Kiểm tra quy trình xử lý đơn hàng tại bưu cục",
      "Phân tích dữ liệu và báo cáo về chất lượng dịch vụ",
      "Đề xuất cải tiến quy trình vận hành",
      "Phối hợp với các bộ phận liên quan để nâng cao chất lượng",
      "Xử lý các vấn đề phát sinh trong quá trình vận hành",
    ],
    requirements: [
      "Tốt nghiệp Cao đẳng trở lên",
      "Không yêu cầu kinh nghiệm, được đào tạo từ đầu",
      "Kỹ năng phân tích và xử lý vấn đề tốt",
      "Tỉ mỉ, cẩn thận, có tinh thần trách nhiệm cao",
      "Có khả năng làm việc với dữ liệu và báo cáo",
      "Sẵn sàng làm việc trong môi trường logistics năng động",
    ],
    benefits: [
      "Lương 7-10 triệu VNĐ, ổn định và đúng kỳ",
      "Được đào tạo bài bản về quy trình vận hành logistics",
      "Làm việc trong môi trường startup công nghệ",
      "Cơ hội học hỏi và phát triển trong ngành logistics",
      "Tham gia các khóa đào tạo kỹ năng chuyên môn",
      "Cơ hội thăng tiến lên vị trí chuyên viên, quản lý",
    ],
    contact: {
      name: "Phòng Nhân sự GHTK",
      phone: "024 5566 7788",
      email: "tuyendung@ghtk.vn",
    },
  },
};

// ==================== MODAL CHI TIẾT CÔNG VIỆC ====================
const modal = document.getElementById("jobModal");
const closeBtn = document.querySelector(".close-btn");
const jobDetailContainer = document.getElementById("job-detail");

// Hàm hiển thị modal chi tiết công việc
function showJobDetail(jobId) {
  const jobData = jobDetails[jobId];

  if (jobData && jobDetailContainer) {
    jobDetailContainer.innerHTML = `
            <h2>${jobData.title}</h2>
            <img src="${jobData.logo}" alt="${
      jobData.company
    }" style="width:100px; height:100px; object-fit:cover; border-radius:50%; margin:15px 0;">
            
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
                <p><strong>🏢 Công ty:</strong> ${jobData.company}</p>
                <p><strong>📍 Địa điểm:</strong> ${jobData.location}</p>
                <p><strong>💰 Mức lương:</strong> ${jobData.salary}</p>
                <p><strong>📅 Kinh nghiệm:</strong> ${jobData.experience}</p>
                <p><strong>🎯 Cấp bậc:</strong> ${jobData.level}</p>
                <p><strong>⏰ Hạn nộp hồ sơ:</strong> ${jobData.deadline}</p>
            </div>
            
            <hr>
            
            <h3>📝 Mô tả công việc</h3>
            <ul>
                ${jobData.description
                  .map((item) => `<li>${item}</li>`)
                  .join("")}
            </ul>

            <h3>✅ Yêu cầu ứng viên</h3>
            <ul>
                ${jobData.requirements
                  .map((item) => `<li>${item}</li>`)
                  .join("")}
            </ul>

            <h3>🎁 Quyền lợi</h3>
            <ul>
                ${jobData.benefits.map((item) => `<li>${item}</li>`).join("")}
            </ul>

            <div style="background: #e8f5e8; padding: 15px; border-radius: 8px; margin: 20px 0;">
                <h4>📞 Thông tin liên hệ</h4>
                <p><strong>Người liên hệ:</strong> ${jobData.contact.name}</p>
                <p><strong>Điện thoại:</strong> ${jobData.contact.phone}</p>
                <p><strong>Email:</strong> ${jobData.contact.email}</p>
            </div>

            <button class="apply-btn" onclick="redirectToApplication('${jobId}')">🎯 Ứng tuyển ngay</button>
        `;

    if (modal) {
      modal.style.display = "flex";
    }
  }
}

// Hàm chuyển hướng đến trang ứng tuyển
function redirectToApplication(jobId) {
  const jobData = jobDetails[jobId];

  if (jobData) {
    // Lưu thông tin công việc vào localStorage
    localStorage.setItem(
      "selectedJob",
      JSON.stringify({
        id: jobId,
        title: jobData.title,
        company: jobData.company,
        location: jobData.location,
        salary: jobData.salary,
      })
    );

    // Đóng modal
    if (modal) {
      modal.style.display = "none";
    }

    // Chuyển hướng đến trang ứng tuyển
    window.location.href = "ungtuyen.html";
  }
}

// Xử lý click vào job card
document.querySelectorAll(".job-card").forEach((card) => {
  card.addEventListener("click", (e) => {
    // Nếu click vào nút save thì không mở modal
    if (e.target.closest(".save-btn")) return;

    // Lấy job ID từ data attribute
    const jobId = card.getAttribute("data-job");
    showJobDetail(jobId);
  });
});

// Đóng modal
if (closeBtn) {
  closeBtn.addEventListener("click", () => {
    if (modal) {
      modal.style.display = "none";
    }
  });
}

// Đóng modal khi click bên ngoài
if (modal) {
  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
}

// ==================== XỬ LÝ NÚT LƯU CÔNG VIỆC ====================
document.querySelectorAll(".save-btn").forEach((btn) => {
  btn.addEventListener("click", function (e) {
    e.stopPropagation(); // Ngăn sự kiện nổi lên job card
    const jobCard = this.closest(".job-card");
    const jobTitle = jobCard.querySelector("h3").innerText;

    // Đổi trạng thái nút
    if (this.innerHTML.includes("Lưu thông tin")) {
      this.innerHTML = '<i class="fas fa-check"></i> Đã lưu';
      this.style.background = "#28a745";
      alert(`Đã lưu công việc: ${jobTitle}`);
    } else {
      this.innerHTML = '<i class="far fa-bookmark"></i> Lưu thông tin';
      this.style.background = "#ff416c";
      alert(`Đã bỏ lưu công việc: ${jobTitle}`);
    }
  });
});

// ==================== XỬ LÝ BANNER TUYỂN GẤP ====================
// ==================== XỬ LÝ BANNER TUYỂN GẤP ====================

// Dữ liệu cho banner tuyển gấp
const urgentJob = {
  id: "urgent-job-001",
  title: "Nhân Viên Kế Toán Thuế",
  company: "Công Ty TNHH WS Việt Nam",
  location: "Hà Nội",
  salary: "13 - 15 triệu VND",
  quantity: "03",
  deadline: "01/09 - 30/09/2025",
  logo: "anh/download.jpg",
  experience: "1-3 năm kinh nghiệm",
  level: "Nhân viên",
  description: [
    "Thực hiện các nghiệp vụ kế toán thuế theo quy định của công ty và Nhà nước",
    "Lập và nộp các báo cáo thuế hàng tháng, quý, năm đúng hạn",
    "Theo dõi và quản lý công nợ khách hàng, nhà cung cấp",
    "Kiểm tra tính hợp lệ của hóa đơn, chứng từ kế toán",
    "Phối hợp với cơ quan thuế trong các đợt thanh tra, kiểm tra",
    "Lập báo cáo tài chính nội bộ theo yêu cầu của Ban Giám đốc",
  ],
  requirements: [
    "Tốt nghiệp Cao đẳng/Đại học chuyên ngành Kế toán, Kiểm toán",
    "Có 1-3 năm kinh nghiệm ở vị trí kế toán thuế",
    "Thành thạo phần mềm kế toán MISA, FAST hoặc tương đương",
    "Nắm vững kiến thức về luật thuế, chuẩn mực kế toán Việt Nam",
    "Kỹ năng Excel tốt, có khả năng phân tích số liệu",
    "Tính cẩn thận, trung thực, chịu được áp lực công việc",
  ],
  benefits: [
    "Mức lương cạnh tranh: 13-15 triệu VND",
    "Thưởng tháng 13, thưởng Lễ Tết theo chính sách công ty",
    "Đóng BHXH, BHYT, BHTN đầy đủ sau 2 tháng thử việc",
    "Được đào tạo nâng cao nghiệp vụ kế toán, thuế",
    "Du lịch công ty hàng năm, teambuilding định kỳ",
    "Môi trường làm việc chuyên nghiệp, cơ hội thăng tiến rõ ràng",
  ],
  contact: {
    name: "Phòng Nhân sự - Ms. Hương",
    phone: "024 1234 5678",
    email: "hr@wsvietnam.com",
  },
};

// Hàm hiển thị modal chi tiết cho banner tuyển gấp
function showUrgentJobDetail() {
  const jobData = urgentJob;

  if (jobDetailContainer) {
    jobDetailContainer.innerHTML = `
            <h2>${jobData.title} - TUYỂN GẤP</h2>
            <div style="background: #ffebee; padding: 10px; border-radius: 5px; margin-bottom: 15px;">
                <p style="color: #e74c3c; font-weight: bold; margin: 0;">🚀 ĐANG TUYỂN GẤP - ƯU TIÊN PHỎNG VẤN NGAY</p>
            </div>
            
            <img src="${jobData.logo}" alt="${
      jobData.company
    }" style="width:100px; height:100px; object-fit:cover; border-radius:50%; margin:15px 0;">
            
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
                <p><strong>🏢 Công ty:</strong> ${jobData.company}</p>
                <p><strong>📍 Địa điểm:</strong> ${jobData.location}</p>
                <p><strong>💰 Mức lương:</strong> ${jobData.salary}</p>
                <p><strong>📊 Số lượng:</strong> ${jobData.quantity}</p>
                <p><strong>📅 Kinh nghiệm:</strong> ${jobData.experience}</p>
                <p><strong>🎯 Cấp bậc:</strong> ${jobData.level}</p>
                <p><strong>⏰ Thời gian tuyển:</strong> ${jobData.deadline}</p>
            </div>
            
            <hr>
            
            <h3>📝 Mô tả công việc</h3>
            <ul>
                ${jobData.description
                  .map((item) => `<li>${item}</li>`)
                  .join("")}
            </ul>

            <h3>✅ Yêu cầu ứng viên</h3>
            <ul>
                ${jobData.requirements
                  .map((item) => `<li>${item}</li>`)
                  .join("")}
            </ul>

            <h3>🎁 Quyền lợi</h3>
            <ul>
                ${jobData.benefits.map((item) => `<li>${item}</li>`).join("")}
            </ul>

            <div style="background: #e8f5e8; padding: 15px; border-radius: 8px; margin: 20px 0;">
                <h4>📞 Thông tin liên hệ</h4>
                <p><strong>Người liên hệ:</strong> ${jobData.contact.name}</p>
                <p><strong>Điện thoại:</strong> ${jobData.contact.phone}</p>
                <p><strong>Email:</strong> ${jobData.contact.email}</p>
            </div>

            <button class="apply-btn" onclick="redirectToUrgentApplication()">🎯 Ứng tuyển ngay - Ưu tiên phỏng vấn</button>
        `;

    if (modal) {
      modal.style.display = "flex";
    }
  }
}

// Hàm chuyển hướng ứng tuyển cho banner
function redirectToUrgentApplication() {
  // Lưu thông tin công việc tuyển gấp vào localStorage
  localStorage.setItem(
    "selectedJob",
    JSON.stringify({
      id: urgentJob.id,
      title: urgentJob.title,
      company: urgentJob.company,
      location: urgentJob.location,
      salary: urgentJob.salary,
      deadline: urgentJob.deadline,
      isUrgent: true, // Đánh dấu là công việc tuyển gấp
    })
  );

  // Đóng modal
  if (modal) {
    modal.style.display = "none";
  }

  // Chuyển hướng đến trang ứng tuyển
  window.location.href = "ungtuyen.html";
}

// Hàm xử lý nút ứng tuyển trong banner
function setupUrgentBanner() {
  const urgentApplyBtn = document.querySelector(".urgent-banner .apply-btn");
  const urgentBanner = document.querySelector(".urgent-banner");

  // Xử lý click vào nút ứng tuyển
  if (urgentApplyBtn) {
    urgentApplyBtn.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      redirectToUrgentApplication();
    });
  }

  // Xử lý click vào toàn bộ banner (trừ nút ứng tuyển)
  if (urgentBanner) {
    urgentBanner.addEventListener("click", function (e) {
      // Chỉ mở modal nếu không click vào nút ứng tuyển
      if (!e.target.closest(".apply-btn")) {
        showUrgentJobDetail();
      }
    });

    // Thêm style cho banner để biết là có thể click
    urgentBanner.style.cursor = "pointer";
    urgentBanner.style.transition = "transform 0.3s ease";

    urgentBanner.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-5px)";
    });

    urgentBanner.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0)";
    });
  }
}
// ==================== BLOG SLIDER ====================
function initializeBlogSlider() {
  const blogSlider = document.querySelector(".blog-slider");
  const blogSlides = document.querySelector(".blog-slider .slides");
  const blogSlideItems = document.querySelectorAll(".blog-slider .slide");
  const blogPrevBtn = document.querySelector(".blog-slider .prev");
  const blogNextBtn = document.querySelector(".blog-slider .next");

  if (!blogSlides || !blogSlideItems.length) return;

  let blogIndex = 0;
  let blogAutoSlide;

  // Tạo dot indicators
  function createDots() {
    let sliderDots = document.querySelector(".blog-slider .slider-dots");
    if (!sliderDots) return;

    sliderDots.innerHTML = "";
    blogSlideItems.forEach((_, index) => {
      const dot = document.createElement("button");
      dot.className = `slider-dot ${index === 0 ? "active" : ""}`;
      dot.addEventListener("click", () => showBlogSlide(index));
      sliderDots.appendChild(dot);
    });
  }

  // Hiển thị slide
  function showBlogSlide(n) {
    blogIndex = (n + blogSlideItems.length) % blogSlideItems.length;
    blogSlides.style.transform = `translateX(-${blogIndex * 100}%)`;

    // Cập nhật dot active
    document
      .querySelectorAll(".blog-slider .slider-dot")
      .forEach((dot, index) => {
        dot.classList.toggle("active", index === blogIndex);
      });

    resetAutoSlide();
  }

  // Tự động chuyển slide
  function startAutoSlide() {
    blogAutoSlide = setInterval(() => {
      showBlogSlide(blogIndex + 1);
    }, 4000);
  }

  function resetAutoSlide() {
    clearInterval(blogAutoSlide);
    startAutoSlide();
  }

  // Sự kiện nút điều hướng
  if (blogPrevBtn && blogNextBtn) {
    blogPrevBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      showBlogSlide(blogIndex - 1);
    });

    blogNextBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      showBlogSlide(blogIndex + 1);
    });
  }

  // Khởi tạo
  createDots();
  startAutoSlide();

  // Pause auto slide khi hover
  if (blogSlider) {
    blogSlider.addEventListener("mouseenter", () => {
      clearInterval(blogAutoSlide);
    });

    blogSlider.addEventListener("mouseleave", () => {
      startAutoSlide();
    });
  }
}

// ==================== XỬ LÝ NGÀNH NGHỀ NỔI BẬT ====================

// Phân loại công việc theo ngành nghề
const jobCategories = {
  "kinh-doanh": ["nhan-vien-ke-toan-1", "nhan-vien-ke-toan-3"],
  marketing: ["chuyen-vien-dvkh-2"],
  "ke-toan": ["nhan-vien-ke-toan-2", "nhan-vien-ke-toan-1"],
  "cong-nghe": ["chuyen-vien-dvkh-3"],
  "nhan-su": ["chuyen-vien-dvkh-1"],
  luat: [],
};

// Hàm xử lý click vào ngành nghề
function setupCareerCategories() {
  const careerCards = document.querySelectorAll(".career-card");

  careerCards.forEach((card) => {
    card.addEventListener("click", function (e) {
      e.preventDefault();

      const careerType =
        this.getAttribute("data-career") ||
        this.querySelector("h3").innerText.toLowerCase();

      filterJobsByCategory(careerType);
    });
  });
}

// Hàm lọc công việc theo ngành nghề
function filterJobsByCategory(category) {
  let jobIds = [];

  // Ánh xạ tên ngành nghề với các job ID tương ứng
  switch (category) {
    case "kinh-doanh":
    case "kinh doanh":
      jobIds = jobCategories["kinh-doanh"];
      break;
    case "marketing":
      jobIds = jobCategories["marketing"];
      break;
    case "ke-toan":
    case "kế toán":
      jobIds = jobCategories["ke-toan"];
      break;
    case "cong-nghe":
    case "công nghệ":
      jobIds = jobCategories["cong-nghe"];
      break;
    case "nhan-su":
    case "nhân sự":
      jobIds = jobCategories["nhan-su"];
      break;
    case "luat":
    case "luật":
      jobIds = jobCategories["luat"];
      break;
    default:
      jobIds = Object.keys(jobDetails);
  }

  if (jobIds.length === 0) {
    alert(
      `Hiện chưa có công việc nào trong ngành ${getCategoryName(
        category
      )}. Vui lòng chọn ngành nghề khác.`
    );
    return;
  }

  // Hiển thị modal danh sách công việc
  showCareerJobsModal(category, jobIds);
}

// Hàm lấy tên ngành nghề
function getCategoryName(category) {
  const categoryNames = {
    "kinh-doanh": "Kinh Doanh",
    marketing: "Marketing",
    "ke-toan": "Kế Toán",
    "cong-nghe": "Công Nghệ",
    "nhan-su": "Nhân Sự",
    luat: "Luật",
  };
  return categoryNames[category] || category;
}

// Hàm hiển thị modal danh sách công việc theo ngành nghề
function showCareerJobsModal(category, jobIds) {
  const categoryName = getCategoryName(category);

  if (jobDetailContainer) {
    let jobsHTML = "";

    jobIds.forEach((jobId) => {
      const jobData = jobDetails[jobId];
      if (jobData) {
        jobsHTML += `
                    <div class="career-job-item" style="border: 1px solid #e0e0e0; border-radius: 8px; padding: 15px; margin-bottom: 15px; cursor: pointer; transition: all 0.3s ease;" 
                         onclick="showJobDetail('${jobId}')">
                        <div style="display: flex; align-items: center; gap: 15px;">
                            <img src="${jobData.logo}" alt="${jobData.company}" style="width: 50px; height: 50px; object-fit: cover; border-radius: 50%;">
                            <div style="flex: 1;">
                                <h4 style="margin: 0 0 5px 0; color: #2c3e50;">${jobData.title}</h4>
                                <p style="margin: 0; color: #666; font-size: 14px;"><strong>Công ty:</strong> ${jobData.company}</p>
                                <p style="margin: 5px 0; color: #e74c3c; font-weight: bold;">${jobData.salary}</p>
                            </div>
                            <div style="text-align: right;">
                                <span style="background: #3498db; color: white; padding: 4px 8px; border-radius: 4px; font-size: 12px;">${jobData.location}</span>
                                <p style="margin: 5px 0 0 0; color: #666; font-size: 12px;">${jobData.experience}</p>
                            </div>
                        </div>
                    </div>
                `;
      }
    });

    jobDetailContainer.innerHTML = `
            <h2>🏢 Ngành ${categoryName} - ${jobIds.length} công việc</h2>
            <p style="color: #666; margin-bottom: 20px;">Danh sách các công việc đang tuyển dụng trong ngành ${categoryName}</p>
            
            <div style="max-height: 400px; overflow-y: auto; margin-bottom: 20px;">
                ${
                  jobsHTML ||
                  '<p style="text-align: center; color: #666; padding: 20px;">Chưa có công việc nào trong ngành này.</p>'
                }
            </div>
            
            <div style="text-align: center;">
                <button class="apply-btn" onclick="closeModal()" style="background: #95a5a6;">Đóng</button>
            </div>
        `;

    if (modal) {
      modal.style.display = "flex";
    }
  }
}

// Hàm đóng modal
function closeModal() {
  if (modal) {
    modal.style.display = "none";
  }
}

// Hàm lọc nhanh theo ngành nghề từ URL parameter
function filterJobsFromURL() {
  const urlParams = new URLSearchParams(window.location.search);
  const category = urlParams.get("category");

  if (category) {
    filterJobsByCategory(category);
  }
}
// ==================== KHỞI TẠO KHI TRANG LOAD XONG ====================
document.addEventListener("DOMContentLoaded", function () {
  console.log("Website TOPtuyendung đã tải xong!");
  console.log("Tổng số công việc:", Object.keys(jobDetails).length);

  // Khởi tạo banner tuyển gấp
  setupUrgentBanner();

  // Khởi tạo blog slider
  initializeBlogSlider();

  // Khởi tạo ngành nghề nổi bật
  setupCareerCategories();

  // Lọc công việc từ URL parameter (nếu có)
  filterJobsFromURL();

  console.log("Tất cả components đã được khởi tạo");
});
// ===== ĐĂNG NHẬP ====
// Xử lý tìm kiếm
function handleSearch(event) {
  event.preventDefault();
  const keyword = document.getElementById("searchInput").value.trim();
  if (keyword) {
    alert(`Tìm kiếm công việc: ${keyword}`);
    // 👉 Có thể chuyển hướng tới trang kết quả tìm kiếm:
    // window.location.href = `timkiem.html?query=${encodeURIComponent(keyword)}`;
  } else {
    alert("Vui lòng nhập từ khóa tìm kiếm!");
  }
}

// Mở / đóng popup đăng nhập
function openLoginModal() {
  document.getElementById("loginModal").style.display = "flex";
}

function closeLoginModal() {
  document.getElementById("loginModal").style.display = "none";
}

// Đóng popup khi click ngoài modal
window.onclick = function (event) {
  const modal = document.getElementById("loginModal");
  if (event.target === modal) modal.style.display = "none";
};

// ===== SEARCH FUNCTIONALITY =====
let searchTimeout;

function handleSearch(event) {
  if (event) event.preventDefault();

  const keyword = document.getElementById("searchInput").value.trim();

  if (keyword) {
    // Trong thực tế: chuyển hướng đến trang kết quả
    // window.location.href = `timkiem.html?q=${encodeURIComponent(keyword)}`;
    alert(`Tìm kiếm: "${keyword}" - Chuyển hướng đến trang kết quả`);
  } else {
    alert("Vui lòng nhập từ khóa tìm kiếm!");
  }
  hideSearchSuggestions();
}

// Real-time search suggestions
document.getElementById("searchInput").addEventListener("input", function (e) {
  clearTimeout(searchTimeout);
  const query = e.target.value.trim();

  if (query.length > 2) {
    searchTimeout = setTimeout(() => {
      showSearchSuggestions(query);
    }, 300);
  } else {
    hideSearchSuggestions();
  }
});

function showSearchSuggestions(query) {
  // Dữ liệu mẫu cho suggestions
  const mockSuggestions = [
    { text: "Lập trình viên Frontend", icon: "fa-code", count: "125" },
    { text: "Nhân viên Kinh doanh", icon: "fa-chart-line", count: "89" },
    { text: "Part-time Hà Nội", icon: "fa-map-marker-alt", count: "67" },
    { text: "Full-time Remote", icon: "fa-laptop-house", count: "45" },
    { text: "Thiết kế UI/UX", icon: "fa-palette", count: "32" },
  ];

  const container = document.getElementById("searchSuggestions");
  container.innerHTML = "";

  const filteredSuggestions = mockSuggestions.filter((item) =>
    item.text.toLowerCase().includes(query.toLowerCase())
  );

  if (filteredSuggestions.length > 0) {
    filteredSuggestions.forEach((item) => {
      const div = document.createElement("div");
      div.className = "suggestion-item";
      div.innerHTML = `
                        <i class="fas ${item.icon} suggestion-icon"></i>
                        <span>${item.text}</span>
                        <small style="margin-left: auto; color: #6c757d; font-size: 12px;">${item.count} việc làm</small>
                    `;
      div.onclick = () => {
        document.getElementById("searchInput").value = item.text;
        handleSearch();
      };
      container.appendChild(div);
    });
    container.style.display = "block";
  } else {
    hideSearchSuggestions();
  }
}

function hideSearchSuggestions() {
  document.getElementById("searchSuggestions").style.display = "none";
}

// Đóng suggestions khi click outside
document.addEventListener("click", function (e) {
  if (!e.target.closest(".search-container")) {
    hideSearchSuggestions();
  }
});

// ===== AUTHENTICATION FUNCTIONALITY =====
let currentUser = null;

function openLoginModal() {
  document.getElementById("loginModal").style.display = "flex";
}

function closeLoginModal() {
  document.getElementById("loginModal").style.display = "none";
}

function openRegisterModal() {
  document.getElementById("registerModal").style.display = "flex";
}

function closeRegisterModal() {
  document.getElementById("registerModal").style.display = "none";
}

function switchToRegister() {
  closeLoginModal();
  openRegisterModal();
}

function switchToLogin() {
  closeRegisterModal();
  openLoginModal();
}

// Xử lý đăng nhập
document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();
  // Giả lập đăng nhập thành công
  simulateLogin({ name: "Nguyễn Văn A", email: "user@example.com" });
});

// Xử lý đăng ký
document
  .getElementById("registerForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    const name = this.querySelector('input[type="text"]').value;
    // Giả lập đăng ký thành công
    simulateLogin({ name: name, email: "newuser@example.com" });
  });

function simulateLogin(user) {
  currentUser = user;
  updateUIAfterLogin(user);
  closeLoginModal();
  closeRegisterModal();
  alert(`Đăng nhập thành công! Chào mừng ${user.name}`);
}

function updateUIAfterLogin(user) {
  document.querySelector(".auth-buttons").style.display = "none";
  document.querySelector(".user-menu").style.display = "block";
  document.querySelector(".user-name").textContent = user.name;
}

function logout() {
  currentUser = null;
  document.querySelector(".auth-buttons").style.display = "flex";
  document.querySelector(".user-menu").style.display = "none";
  alert("Đã đăng xuất thành công!");
}

function openPostJobModal() {
  if (!currentUser) {
    alert("Vui lòng đăng nhập để đăng tin tuyển dụng!");
    openLoginModal();
  } else {
    alert("Mở modal đăng tin tuyển dụng...");
  }
}

// ===== UTILITY FUNCTIONS =====
function togglePassword(icon) {
  const input = icon.parentElement.querySelector("input");
  const isPassword = input.type === "password";

  input.type = isPassword ? "text" : "password";
  icon.innerHTML = isPassword
    ? '<i class="fas fa-eye-slash"></i>'
    : '<i class="fas fa-eye"></i>';
}

function openPopup() {
  alert("Chức năng liên hệ sẽ được mở tại đây!");
}

// Đóng modal khi click outside
window.addEventListener("click", function (e) {
  if (e.target.classList.contains("modal")) {
    e.target.style.display = "none";
  }
});

// Đóng modal với ESC key
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    closeLoginModal();
    closeRegisterModal();
  }
});
// ====== POPUP LIÊN HỆ ======
function openPopup() {
  document.getElementById("overlay").style.display = "flex";
  document.body.style.overflow = "hidden"; // Ngăn scroll background
}

function closePopup() {
  document.getElementById("overlay").style.display = "none";
  document.body.style.overflow = "auto"; // Khôi phục scroll
}

// Đóng popup khi click ra ngoài
document.getElementById("overlay").addEventListener("click", function (e) {
  if (e.target === this) {
    closePopup();
  }
});

// Xử lý các nút chức năng trong popup
document.addEventListener("DOMContentLoaded", function () {
  const popup = document.querySelector(".contact-popup");

  // Nút Gọi ngay
  popup
    .querySelector(".actions button:nth-child(1)")
    .addEventListener("click", function () {
      window.open("tel:+84123456789");
    });

  // Nút Gửi Email
  popup
    .querySelector(".actions button:nth-child(2)")
    .addEventListener("click", function () {
      window.open("mailto:support@tuyendung.com");
    });

  // Nút Chat trực tiếp
  popup
    .querySelector(".actions button:nth-child(3)")
    .addEventListener("click", function () {
      alert("Tính năng chat trực tiếp sẽ được kích hoạt!");
      // Có thể tích hợp chat widget ở đây
    });

  // Nút Chia sẻ
  popup
    .querySelector(".popup-footer button:nth-child(1)")
    .addEventListener("click", function () {
      if (navigator.share) {
        navigator.share({
          title: "Liên hệ TOPtuyendung",
          text: "Thông tin liên hệ hỗ trợ tuyển dụng",
          url: window.location.href,
        });
      } else {
        // Fallback cho trình duyệt không hỗ trợ Web Share API
        navigator.clipboard.writeText(window.location.href);
        alert("Đã copy link vào clipboard!");
      }
    });

  // Nút Lưu lại
  popup
    .querySelector(".popup-footer button:nth-child(2)")
    .addEventListener("click", function () {
      const contactInfo = {
        hotline: "+84 123 456 789",
        email: "support@tuyendung.com",
        address: "Ho Chi Minh City, Vietnam",
      };

      // Lưu vào localStorage
      localStorage.setItem("savedContact", JSON.stringify(contactInfo));
      alert("✅ Đã lưu thông tin liên hệ!");
    });
});

// Đóng bằng phím ESC
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    closePopup();
  }
});
// ====== XỬ LÝ NÚT CHIA SẺ ======
function handleShare() {
  const shareData = {
    title: "TOPtuyendung - Liên hệ hỗ trợ",
    text: "Thông tin liên hệ hỗ trợ tuyển dụng từ TOPtuyendung",
    url: window.location.href,
  };

  // Kiểm tra trình duyệt có hỗ trợ Web Share API không
  if (navigator.share) {
    navigator
      .share(shareData)
      .then(() => {
        showNotification("✅ Chia sẻ thành công!");
      })
      .catch((error) => {
        console.log("Lỗi chia sẻ:", error);
        fallbackShare();
      });
  } else {
    fallbackShare();
  }
}

// Phương thức dự phòng khi trình duyệt không hỗ trợ Web Share API
function fallbackShare() {
  // Tạo modal chia sẻ tùy chỉnh
  const shareModal = createShareModal();
  document.body.appendChild(shareModal);

  // Hiển thị modal
  setTimeout(() => {
    shareModal.classList.add("show");
  }, 100);
}

// Tạo modal chia sẻ
function createShareModal() {
  const modal = document.createElement("div");
  modal.className = "share-modal";
  modal.innerHTML = `
        <div class="share-modal-content">
            <span class="share-close" onclick="closeShareModal(this)">&times;</span>
            <h3>Chia sẻ liên kết</h3>
            <div class="share-options">
                <button class="share-option" onclick="copyToClipboard()">
                    <i class="fas fa-copy"></i>
                    <span>Sao chép liên kết</span>
                </button>
                <a class="share-option" href="https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                  window.location.href
                )}" target="_blank">
                    <i class="fab fa-facebook"></i>
                    <span>Facebook</span>
                </a>
                <a class="share-option" href="https://twitter.com/intent/tweet?url=${encodeURIComponent(
                  window.location.href
                )}&text=${encodeURIComponent(
    "Liên hệ hỗ trợ TOPtuyendung"
  )}" target="_blank">
                    <i class="fab fa-twitter"></i>
                    <span>Twitter</span>
                </a>
                <a class="share-option" href="https://zalo.me/share?url=${encodeURIComponent(
                  window.location.href
                )}&text=${encodeURIComponent(
    "Liên hệ hỗ trợ TOPtuyendung"
  )}" target="_blank">
                    <i class="fab fa-weixin"></i>
                    <span>Zalo</span>
                </a>
            </div>
            <div class="share-link">
                <input type="text" value="${window.location.href}" readonly>
                <button onclick="copyToClipboard()">Copy</button>
            </div>
        </div>
    `;
  return modal;
}

// Sao chép vào clipboard
function copyToClipboard() {
  const tempInput = document.createElement("input");
  tempInput.value = window.location.href;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand("copy");
  document.body.removeChild(tempInput);

  showNotification("✅ Đã sao chép liên kết vào clipboard!");
  closeAllShareModals();
}

// Đóng modal chia sẻ
function closeShareModal(element) {
  const modal = element.closest(".share-modal");
  modal.classList.remove("show");
  setTimeout(() => {
    modal.remove();
  }, 300);
}

function closeAllShareModals() {
  document.querySelectorAll(".share-modal").forEach((modal) => {
    modal.classList.remove("show");
    setTimeout(() => {
      modal.remove();
    }, 300);
  });
}

// ====== XỬ LÝ NÚT LƯU LẠI ======
function handleSaveContact() {
  const contactInfo = {
    hotline: "+84 123 456 789",
    email: "support@tuyendung.com",
    address: "Ho Chi Minh City, Vietnam",
    savedAt: new Date().toISOString(),
    name: "Admin Support - TOPtuyendung",
  };

  // Lấy danh sách contact đã lưu từ localStorage
  let savedContacts = JSON.parse(localStorage.getItem("savedContacts") || "[]");

  // Kiểm tra xem contact đã được lưu chưa
  const isAlreadySaved = savedContacts.some(
    (contact) =>
      contact.email === contactInfo.email &&
      contact.hotline === contactInfo.hotline
  );

  if (isAlreadySaved) {
    showNotification("ℹ️ Thông tin liên hệ đã được lưu trước đó!");
    return;
  }

  // Thêm contact mới vào đầu mảng
  savedContacts.unshift(contactInfo);

  // Giới hạn tối đa 20 contact
  if (savedContacts.length > 20) {
    savedContacts = savedContacts.slice(0, 20);
  }

  // Lưu vào localStorage
  localStorage.setItem("savedContacts", JSON.stringify(savedContacts));

  // Hiển thị thông báo thành công
  showNotification("✅ Đã lưu thông tin liên hệ!");

  // Cập nhật badge nếu có
  updateSaveBadge();
}

// Cập nhật badge số lượng contact đã lưu
function updateSaveBadge() {
  const savedContacts = JSON.parse(
    localStorage.getItem("savedContacts") || "[]"
  );
  const badge = document.querySelector(".save-badge");

  if (badge) {
    badge.textContent = savedContacts.length;
    badge.style.display = savedContacts.length > 0 ? "flex" : "none";
  }
}

// Hiển thị thông báo
function showNotification(message) {
  // Kiểm tra xem đã có thông báo nào chưa
  let notification = document.querySelector(".notification");

  if (!notification) {
    notification = document.createElement("div");
    notification.className = "notification";
    document.body.appendChild(notification);
  }

  notification.textContent = message;
  notification.classList.add("show");

  // Tự động ẩn sau 3 giây
  setTimeout(() => {
    notification.classList.remove("show");
    setTimeout(() => {
      if (notification.parentNode) {
        notification.parentNode.removeChild(notification);
      }
    }, 300);
  }, 3000);
}

// ====== GÁN SỰ KIỆN CHO CÁC NÚT ======
document.addEventListener("DOMContentLoaded", function () {
  // Gán sự kiện cho nút Chia sẻ
  const shareButton = document.querySelector(
    ".popup-footer button:nth-child(1)"
  );
  if (shareButton) {
    shareButton.addEventListener("click", handleShare);
  }

  // Gán sự kiện cho nút Lưu lại
  const saveButton = document.querySelector(
    ".popup-footer button:nth-child(2)"
  );
  if (saveButton) {
    saveButton.addEventListener("click", handleSaveContact);
  }

  // Kiểm tra và cập nhật badge khi trang load
  updateSaveBadge();
});

// Đóng modal chia sẻ khi click ra ngoài
document.addEventListener("click", function (e) {
  if (e.target.classList.contains("share-modal")) {
    closeAllShareModals();
  }
});
