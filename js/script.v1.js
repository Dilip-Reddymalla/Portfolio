const sections = document.querySelectorAll("section");
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.2 }
);
sections.forEach(section => observer.observe(section));

emailLink = document.getElementById("Email-btn");

emailLink.addEventListener("click", function() {
  const email = "reddymaladilip@gmail.com";
  navigator.clipboard.writeText(email)
      .then(() => {
        document.getElementById("notify").classList.remove("hidden");
        setTimeout(() => {
          document.getElementById("notify").classList.add("hidden");
        }, 2000);
      })
      .catch(err => {
        console.error("Failed to copy:", err);
      });
});
