# A Decade Under The Influence

This is a simple website built with plain HTML, CSS, and JavaScript, deployed using GitHub Pages. The website is auto-deployed whenever changes are pushed to the main branch.

## Features

- **Static Site**: Built using plain HTML, CSS, and JavaScript.
- **Responsive Design**: Designed to look good on all screen sizes.
- **CSS with Autoprefixer**: CSS is processed through [Autoprefixer](https://autoprefixer.github.io/) to ensure cross-browser compatibility before merging.
- **GitHub Pages**: Hosted and deployed automatically via GitHub Pages.

## Deployment

This site is deployed using GitHub Pages with auto-deploy enabled. Any changes pushed to the `main` branch are automatically built and deployed.

### Local Development

To preview and edit the website locally:

1. Clone the repository:

   ```bash
   git clone git@github.com:macdonaldr93/adecadeunderkaraoke.git
   cd adecadeunderkaraoke
   ```

2. Install dependencies and start the development server:

   ```bash
   brew install serve
   serve .
   ```

3. Open the local development server in your browser (usually `http://localhost:3000` by default).

### CSS Workflow

1. After editing the CSS, run it through [Autoprefixer](https://autoprefixer.github.io/) before committing:

   - Copy and paste your CSS into the Autoprefixer tool.
   - Adjust settings if needed (default settings usually suffice).
   - Replace your local CSS with the output from Autoprefixer.

2. Test your changes locally to ensure everything looks and works as expected.

### Deployment Notes

- Ensure your changes are pushed to the `main` branch.
- GitHub Pages will automatically deploy the updated site.

## Contributing

If you wish to contribute:

1. Create a new branch for your changes:
   ```bash
   git checkout -b feature/your-feature-name
   ```
1. Commit your changes using [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/):
   ```bash
   git commit -m "feat: Add your feature description"
   ```
1. Push your branch:
   ```bash
   git push origin feature/your-feature-name
   ```
1. Open a pull request.

## License

This project is open source and available under the [MIT License](LICENSE).

## Feedback and Issues

For feedback or to report issues, please open an issue in the [GitHub repository](https://github.com/macdonaldr93/adecadeunderkaraoke/issues).

## Acknowledgments

- CSS Autoprefixer: [https://autoprefixer.github.io/](https://autoprefixer.github.io/)
- Hosted with ❤️ on [GitHub Pages](https://pages.github.com/).
