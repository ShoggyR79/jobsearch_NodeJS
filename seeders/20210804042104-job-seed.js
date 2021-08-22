'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Jobs', [
      {
        id: 1,
        companyId: 2,
        name: "Kế toán 103",
        location: "Hung yen",
        address: "Plot K-3&4, Thang Long Industrial Park II, Di Su Commune, My Hao District, Hung Yen Province,Vietnam",
        position: "Senior",
        description: "-Thực hiện các công việc khác theo chỉ thị của cấp trên.",
        requirements: "Có ít nhất 1 năm kinh nghiệm về lập trình trên visual studio ( C#, VB), Có thể cài đặt, sửa lỗi máy tính. Có hiểu biết về hệ thống máy tính sử dụng domain.",
        skills: "Accounting, Managment",
        language: "Vietnamese, English",
        benefits: "Cơ hội giao tiếp tiếng anh hàng ngày, Công tác nước ngoài. Bảo hiểm xã hội, y tế, 24/24,Du lịch 1 năm/lần",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        companyId: 1,
        name: "Software Developer (NodeJS, ReactJS/ Python)",
        location: "Ho Chi Minh",
        address: "Lô L29B-31B-33B, Đường Tân Thuận, KCX Tân Thuận, Quận 7, Tp.HCM",
        position: "Experienced (non-manager)",
        description: `- Lập trình và phát triển các ứng dụng web/ service.
        - Thực hiện mô tả, phân tích các yêu cầu phần mềm.
        - Kết hợp với các bộ phận khác (kiểm thử, hệ thống,...) để hoàn thành, triển khai dự án.
        - Báo cáo và thực hiện các công việc theo yêu cầu của quản lý.`,
        requirements: `- Tốt nghiệp các trường Đại học, chuyên ngành CNTT, Điện tử, Viễn thông,...
        - Có hiểu biết về lập trình hướng đối tượng.
        - Hiểu biết về HTML / CSS / Javascript.
        - Thành thạo MỘT TRONG CÁC công nghệ sau: NodeJS/ Java/ ReactJS/ Python...
        - Hiểu biết về MVC Framework.
        - Có khả năng đọc hiểu tài liệu tiếng Anh.
        - Có khả năng làm việc độc lập và theo nhóm.
        - Cẩn thận, kiên nhẫn và ham học hỏi.
        `,
        language: "Any",
        benefits: `- Gói thu nhập tương đương từ 14 - 22 tháng lương quy đổi (Thưởng lương tháng 13, lương kinh doanh, tiền mừng tuổi...).
        - Đầy đủ các chế độ theo luật lao động hiện hành.
        - Chính sách phúc lợi theo quy định của Công ty đa dạng: Chăm sóc sức khỏe định kì hàng năm; Gói bảo hiểm sức khỏe chuyên biệt (FPT Care – Khám chữa bệnh miễn phí tại tất cả các bệnh viện); `,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
