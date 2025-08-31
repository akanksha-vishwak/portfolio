export default function Footer() {
  return (
    <footer className="w-full bg-gray-100 py-6 mt-12 text-center text-gray-600">
      <p>© {new Date().getFullYear()} Dr. Akanksha Vishwakarma. All rights reserved.</p>
      <p className="mt-2">
        <a
          href="https://www.linkedin.com/in/avishwak"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-600"
        >
          LinkedIn
        </a>{" "}
        |{" "}
        <a
          href="https://github.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-600"
        >
          GitHub
        </a>{" "}
        |{" "}
        <a
          href="mailto:akanksha.vishwak@gmail.com"
          className="hover:text-blue-600"
        >
          Email
        </a>
      </p>
    </footer>
  );
}
