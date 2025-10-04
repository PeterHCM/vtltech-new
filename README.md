# 🌐 VTLTECH Website

Dự án website nội bộ & giới thiệu công ty **CÔNG TY TNHH KỸ THUẬT VIỆT THẮNG LỢI**  
Sử dụng **Tailwind CSS** để xây dựng giao diện.

## 🚀 Yêu cầu hệ thống

- Node.js (khuyến nghị >= 18.x)  
- npm (>= 9.x)

## ⚙️ Cài đặt

Clone repo về máy:

```bash
git clone https://github.com/PeterHCM/vtltech-new.git
cd vtltech-new
```

Cài đặt các package cần thiết:

```bash
npm install
```
Cài đặt Module cần thiết:

```bash
npm install @tailwindcss/line-clamp @tailwindcss/typography
```
## 🎨 Phát triển

Chạy build trong quá trình phát triển:

```bash
npm run dev
```

> Mỗi khi bạn chỉnh sửa file `.html` hoặc `.css`, Tailwind sẽ tự động rebuild ra `site.css`.

## 📦 Build Production

Trước khi commit và push code, cần build lại CSS để đảm bảo có file mới nhất:

```bash
npm run build
```

> File CSS sẽ được tạo hoặc ghi đè trong thư mục `dist/` hoặc `site.css` (tùy cấu hình).

## 🔄 Quy trình Git (Commit & Push)

```bash
git checkout main
git pull origin main
npm run build
git add .
git commit -m "Cập nhật giao diện"
git push origin main
```

## ✨ Tính năng chính

- Giao diện responsive, tối ưu cho desktop và mobile.
- Sử dụng Tailwind CSS để dễ dàng tùy biến và mở rộng.
- Cấu trúc HTML rõ ràng, dễ bảo trì.
- Tích hợp quy trình build tự động với npm scripts.
- Hỗ trợ phát triển nhanh với `npm run dev`.

## 🚚 Triển khai lên Hosting

Bạn có thể deploy website này lên bất kỳ dịch vụ hosting tĩnh nào như:

### 🔹 GitHub Pages

1. Build production:

    ```bash
    npm run build
    ```

2. Copy nội dung trong thư mục `dist/` hoặc `site.css` vào nhánh `gh-pages`.

3. Cấu hình GitHub Pages trong phần Settings của repo.

### 🔹 Netlify / Vercel

1. Tạo tài khoản và kết nối repo GitHub.

2. Chọn build command là:

    ```bash
    npm run build
    ```

3. Chọn thư mục xuất bản là `dist/` hoặc thư mục chứa `index.html`.

> Các dịch vụ này sẽ tự động build lại mỗi khi bạn push lên GitHub.

## 📁 Cấu trúc thư mục (tuỳ chọn)

```plaintext
vtltech-new/
├── dist/              # File CSS build production
├── src/               # Source code HTML/CSS
├── tailwind.config.js
├── package.json
└── README.md
```

---
