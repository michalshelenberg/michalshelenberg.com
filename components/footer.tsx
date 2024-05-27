export default function Footer() {
  return (
    <footer className="h-dvh flex gap-8 flex-col items-center justify-center">
      {/* <div className="flex flex-row gap-4">
        <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
          <Link
            href={"https://www.linkedin.com/in/michalshelenberg"}
            target="_blank"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={32} />
          </Link>
        </motion.div>
        <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
          <Link
            href={"https://github.com/michalshelenberg"}
            target="_blank"
            aria-label="GitHub"
          >
            <FaGithub size={32} />
          </Link>
        </motion.div>
      </div> */}
      <p>&#169; Michal Shelenberg</p>
    </footer>
  );
}
