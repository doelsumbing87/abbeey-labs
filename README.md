# Abbeey Labs Blog

![Abbeey Labs Blog Screenshot](https://abbeey-labs.vercel.app/assets/images/social-preview.png)

Welcome to the official repository for my personal blog, **Abbeey Labs Blog**. This space is dedicated to my explorations into the intersection of Artificial Intelligence and Blockchain technology. This project is built with pure HTML, CSS, and JavaScript, utilizing Tailwind CSS for styling to create a modern, responsive, and feature-rich reading experience.

**Live Demo:** [**abbeey-labs.vercel.app**](https://abbeey-labs.vercel.app/)

---

## ✨ Features

This blog is designed with a professional and clean aesthetic, packed with features to enhance the user experience:

* **Fully Responsive Design**: Looks great on mobile, tablet, and desktop devices.
* **Light/Dark Mode**: An animated theme switch allows users to choose their preferred viewing mode, with the preference saved in their browser.
* **Live Local Clock**: A dynamic clock on the homepage that displays the visitor's local time.
* **Client-Side Search**: A functional search bar on the blog page to filter articles by title, summary, or tags in real-time.
* **Tag-Based Navigation**: Articles are categorized with tags, and each tag has its own dedicated page.
* **SEO Optimized**: Includes specific meta tags (Open Graph, Twitter Cards) for each article to ensure beautiful link previews when shared on social media.
* **Custom 404 Page**: A user-friendly "Page Not Found" page to guide lost visitors.
* **Sitemap & `robots.txt`**: Properly configured to help search engines crawl and index the site efficiently.
* **Functional Contact Form**: Integrated with Web3Forms for a serverless, working contact form.

---

## 🛠️ Technologies Used

This project is intentionally built with a simple and robust stack, focusing on core web technologies without heavy frameworks.

* **HTML5**: For the structure and content.
* **CSS3**: With custom properties (variables) for theming.
* **Tailwind CSS**: A utility-first CSS framework for rapid UI development (loaded via CDN).
* **JavaScript (ES6+)**: For all client-side interactivity, including the theme switch, mobile menu, search, and contact form.
* **Web3Forms**: A free, serverless service to handle contact form submissions.
* **Vercel**: For hosting and continuous deployment.

---

## 📂 Project Structure

The project is organized logically to make it easy to manage and scale.

```
/
├── 📄 index.html         // Homepage
├── 📄 about.html         // About Me page
├── 📄 blog.html          // Main blog page with search
├── 📄 contact.html       // Contact page with a functional form
├── 📄 404.html           // Custom 404 page
├── 📄 sitemap.xml        // Sitemap for SEO
├── 📄 robots.txt         // Instructions for search engine crawlers
├── 📄 .gitignore         // Specifies files for Git to ignore
│
├── 📁 assets/            // All supporting files
│   ├── 📁 css/style.css  // Custom CSS, variables, and theme styles
│   ├── 📁 js/main.js     // All JavaScript functionality
│   └── 📁 images/        // Logos, favicons, and article images
│
├── 📁 posts/             // Contains the HTML file for each individual blog post
│   └── 📄 article-name.html
│
└── 📁 tags/              // Contains the HTML file for each category tag page
    └── 📄 tag-name.html
```

---

## 🚀 How to Add a New Post

Adding a new article is straightforward:

1.  **Create the Post File**:
    * Duplicate an existing article file from the `/posts/` directory (e.g., copy `the-future-of-generative-ai.html`).
    * Rename the new file to match your article's title (e.g., `my-new-awesome-post.html`).

2.  **Update the Content**:
    * Open the new HTML file and change the content inside the `<article>` tag.
    * Update the `<title>` and all `<meta>` tags in the `<head>` section to reflect the new article's title and summary. This is crucial for SEO and social sharing.
    * Update the "Previous/Next Article" links in the sidebar.

3.  **Update the Blog Page**:
    * Open `blog.html`.
    * Copy an existing `<article>` card block and paste it to create a new one. Update its title, summary, tag, and link to point to your new post file.

4.  **Update the Search Data**:
    * Open `data/search-data.json`.
    * Add a new JSON object to the array with the `url`, `title`, `summary`, and `tags` for your new post.

5.  **Push to GitHub**:
    * Commit and push your changes. Vercel will automatically redeploy the site with your new article.

---

## 📄 Usage & License

This project was primarily built for my personal use. However, the code is open-source and you are welcome to fork this repository, adapt it, and use it as a template for your own personal blog.

This project is available under the [MIT License](LICENSE).

If you have any questions or find any issues, feel free to open an issue or get in touch!
