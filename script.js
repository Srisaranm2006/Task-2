function openModal(internship) {
  const modal = document.getElementById("detailsModal");
  const title = document.getElementById("modalTitle");
  const desc = document.getElementById("modalDescription");

  const details = {
    web: {
      title: "Web Development Internship",
      desc: "Learn frontend technologies like HTML, CSS, and JS. Build live projects and host them online. Includes certificate after completion."
    },
    python: {
      title: "Python Development Internship",
      desc: "Gain practical skills in Python programming, data handling, and automation. Create real-world applications and receive certification."
    },
    ai: {
      title: "AI / ML Internship",
      desc: "Work on AI and ML algorithms, datasets, and predictive models. Ideal for aspiring AI developers with hands-on learning."
    },
    datasci: {
      title: "Data Science Internship",
      desc: "Analyze and visualize data using Pandas, Numpy, and Matplotlib. Build predictive models and present insights from real datasets."
    }
  };

  title.textContent = details[internship].title;
  desc.textContent = details[internship].desc;
  modal.style.display = "flex";
}

function closeModal() {
  document.getElementById("detailsModal").style.display = "none";
}

function applyPopup(courseName) {
  const modal = document.getElementById("applyModal");
  const applyText = document.getElementById("applyText");
  applyText.textContent = `Thank you for your interest in the ${courseName}. The application form will be available soon! 🚀`;
  modal.style.display = "flex";
}

function closeApplyModal() {
  document.getElementById("applyModal").style.display = "none";
}

window.onclick = function(event) {
  const detailsModal = document.getElementById("detailsModal");
  const applyModal = document.getElementById("applyModal");
  if (event.target === detailsModal) closeModal();
  if (event.target === applyModal) closeApplyModal();
};
