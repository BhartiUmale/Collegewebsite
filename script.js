
// =====================================
// 1. MOBILE NAVBAR
// =====================================

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("show");

    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.textContent = isOpen ? "✕" : "☰";
});

// Close menu after clicking a link

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("show");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.textContent = "☰";
    });
});


// =====================================
// 2. STUDY MATERIALS
// =====================================

// Add your Google Drive links here.

const notes = [

    {
        title: "Introduction to C Programming",
        subject: "c",
        category: "C Programming",
        description: "Introduction, basic concepts, data types and operators.",
        icon: "💻",
        link: "https://drive.google.com/file/d/YOUR_FILE_ID/view"
    },

    {
        title: "C Programming Practical",
        subject: "c",
        category: "C Programming",
        description: "C programming practical programs and solutions.",
        icon: "📘",
        link: "https://drive.google.com/file/d/YOUR_FILE_ID/view"
    },

    {
        title: "Java Programming Notes",
        subject: "java",
        category: "Java",
        description: "Java fundamentals, OOP concepts and examples.",
        icon: "☕",
        link: "https://drive.google.com/file/d/YOUR_FILE_ID/view"
    },

    {
        title: "DBMS Notes",
        subject: "dbms",
        category: "DBMS",
        description: "Database concepts, SQL, keys and normalization.",
        icon: "🗄️",
        link: "https://drive.google.com/file/d/YOUR_FILE_ID/view"
    },

    {
        title: "Data Structures Notes",
        subject: "ds",
        category: "Data Structures",
        description: "Arrays, linked lists, stacks and queues.",
        icon: "📚",
        link: "https://drive.google.com/file/d/YOUR_FILE_ID/view"
    },

    {
        title: "Programming Resources",
        subject: "other",
        category: "Other",
        description: "Useful programming resources for students.",
        icon: "🚀",
        link: "https://drive.google.com/file/d/YOUR_FILE_ID/view"
    }

];


// =====================================
// 3. DISPLAY NOTES
// =====================================

const materialsGrid = document.getElementById("materialsGrid");
const searchInput = document.getElementById("searchNotes");
const subjectFilter = document.getElementById("subjectFilter");
const noResults = document.getElementById("noResults");

function displayNotes() {

    const searchValue = searchInput.value.toLowerCase();
    const selectedSubject = subjectFilter.value;

    const filteredNotes = notes.filter(note => {

        const matchesSearch =
            note.title.toLowerCase().includes(searchValue) ||
            note.description.toLowerCase().includes(searchValue) ||
            note.category.toLowerCase().includes(searchValue);

        const matchesSubject =
            selectedSubject === "all" ||
            note.subject === selectedSubject;

        return matchesSearch && matchesSubject;
    });

    materialsGrid.innerHTML = "";

    noResults.hidden = filteredNotes.length !== 0;

    filteredNotes.forEach(note => {

        const card = document.createElement("div");
        card.className = "material-card";

        const icon = document.createElement("div");
        icon.className = "material-icon";
        icon.textContent = note.icon;

        const tag = document.createElement("span");
        tag.className = "subject-tag";
        tag.textContent = note.category;

        const heading = document.createElement("h3");
        heading.textContent = note.title;

        const description = document.createElement("p");
        description.textContent = note.description;

        const link = document.createElement("a");
        link.className = "material-link";
        link.href = note.link;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        link.textContent = "View Notes →";

        card.append(icon, tag, heading, description, link);

        materialsGrid.appendChild(card);
    });
}


// Search notes

searchInput.addEventListener("input", displayNotes);

// Filter notes

subjectFilter.addEventListener("change", displayNotes);

// Initial display

displayNotes();


// =====================================
// 4. AUTOMATIC COPYRIGHT YEAR
// =====================================

document.getElementById("year").textContent =
    new Date().getFullYear();
