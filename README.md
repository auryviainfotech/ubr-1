# Codename Sky Habitat - Luxury Real Estate Website

A premium 3-page luxury real estate website for Codename Sky Habitat by Urbanrise, built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **3 Pages**: Home, Project, Contact
- **Luxury Design**: Deep navy gradients with gold accents
- **Fully Responsive**: Mobile-first design
- **Email Forms**: Contact and site visit booking forms
- **WhatsApp & Call Integration**: Direct contact buttons
- **Smooth Animations**: Framer Motion reveal effects
- **SEO Optimized**: Meta tags and structured content

## 📋 Tech Stack

- Next.js 14+ (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React Icons
- Nodemailer (for email sending)

## 🛠️ Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up environment variables:**
   Create a `.env.local` file in the root directory:
   ```env
   SMTP_USER=your_gmail_address@gmail.com
   SMTP_PASS=your_gmail_app_password
   TO_EMAIL=skyhabitatbyurbanrise@gmail.com
   ```

3. **Run development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

## 📧 Email Configuration

The website uses Nodemailer with Gmail SMTP. To set up:

1. Enable 2-Step Verification on your Gmail account
2. Generate an App Password: [Google App Passwords](https://myaccount.google.com/apppasswords)
3. Use the App Password as `SMTP_PASS` in your `.env.local`

## 🌐 Deployment on Vercel

1. **Push to GitHub** (already done ✅)

2. **Import to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import the repository: `auryviainfotech/urb`
   - Vercel will auto-detect Next.js settings

3. **Add Environment Variables:**
   In Vercel project settings → Environment Variables, add:
   - `SMTP_USER`
   - `SMTP_PASS`
   - `TO_EMAIL` (optional, defaults to skyhabitatbyurbanrise@gmail.com)

4. **Deploy:**
   - Click "Deploy"
   - Your site will be live at `your-project.vercel.app`

## 📱 Contact Information

- **Phone**: +91 9000298036
- **Email**: skyhabitatbyurbanrise@gmail.com
- **WhatsApp**: [Click to chat](https://wa.me/919000298036)

## 📁 Project Structure

```
├── app/
│   ├── api/contact/     # Email API route
│   ├── contact/         # Contact page
│   ├── project/         # Project page
│   └── page.tsx         # Home page
├── components/          # React components
├── lib/
│   └── content.ts       # Content configuration
└── public/
    ├── photos/          # Images and PDFs
    └── logo-sky-habitat.png
```

## 🎨 Customization

- **Content**: Edit `lib/content.ts` for all text, stats, and media paths
- **Styling**: Modify `app/globals.css` and `tailwind.config.ts`
- **Colors**: Update gold/navy colors in `tailwind.config.ts`

## 📝 Notes

- Video files are excluded from git (see `.gitignore`)
- All images should be placed in `public/photos/`
- Logo should be at `public/logo-sky-habitat.png`

## 🔗 Links

- **Repository**: https://github.com/auryviainfotech/urb
- **Live Site**: (Will be available after Vercel deployment)

---

Built with ❤️ for Codename Sky Habitat by Urbanrise
