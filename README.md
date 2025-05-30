# Brescia Pride

Brescia Pride is a community dedicated to promoting LGBTQ+ rights and awareness in Italy. This project serves as the landing page for their website.

## Tech Stack

This app is built using [Next.js](https://nextjs.org/) and [Tailwind CSS](https://tailwindcss.com/). It is currently deployed using [Vercel](https://vercel.com/).

## Setup

1. If you don’t have Node.js installed, [install it from here](https://nodejs.org/en/) (Node.js version >= 14.6.0 required)

2. Clone this repository

3. Navigate into the project directory

   ```bash
   $ cd brescia-pride-website
   ```

4. Install the requirements

   ```bash
   $ npm install
   ```

   1. Run the app

   ```bash
   $ npm run dev
   ```

You should now be able to access the app at [http://localhost:3000](http://localhost:3000)!

## App Structure

The entry point for the application is `app/page.tsx`, which utilizes various components and fonts located under the `app/ui/components` directory.
Additionally, the `motion` library is used for animations within the app.

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch:
    ```sh
    git checkout -b feature/your-feature
    ```
3. Make your changes and commit them:
    ```sh
    git commit -m 'Add some feature'
    ```
4. Push to the branch:
    ```sh
    git push origin feature/your-feature
    ```
5. Open a pull request.