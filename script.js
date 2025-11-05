// --- Signup ---
function signup() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const role = document.getElementById("role").value;
  const errorBox = document.getElementById("error");

  auth.createUserWithEmailAndPassword(email, password)
    .then(async (cred) => {
      const user = cred.user;
      await db.collection("users").doc(user.uid).set({
        name, email, role, createdAt: new Date().toISOString()
      });
      alert("Signup successful!");
      window.location = "login.html";
    })
    .catch(err => errorBox.innerText = err.message);
}

// --- Login ---
function login() {
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;
  const errorBox = document.getElementById("error");

  auth.signInWithEmailAndPassword(email, password)
    .then(async (cred) => {
      const user = cred.user;
      const doc = await db.collection("users").doc(user.uid).get();
      if (doc.exists) {
        const role = doc.data().role;
        if (role === "student") window.location = "student.html";
        else if (role === "alumni") window.location = "alumni.html";
        else if (role === "institute") window.location = "institute.html";
      }
    })
    .catch(err => errorBox.innerText = err.message);
}

// --- Logout ---
function logout() {
  auth.signOut().then(() => window.location = "login.html");
}

// --- Profile Data Loading ---
auth.onAuthStateChanged(async (user) => {
  if (!user) return;
  const path = window.location.pathname;

  const doc = await db.collection("users").doc(user.uid).get();
  const data = doc.data();

  if (path.includes("student")) {
    document.getElementById("name").innerText = data.name;
    document.getElementById("email").innerText = data.email;
  }

  if (path.includes("alumni")) {
    document.getElementById("name").innerText = data.name;
    document.getElementById("email").innerText = data.email;
  }

  if (path.includes("institute")) {
    const list = document.getElementById("userList");
    const users = await db.collection("users").get();
    list.innerHTML = "";
    users.forEach(u => {
      const d = u.data();
      list.innerHTML += `<p>${d.name} - ${d.role}</p>`;
    });
  }
});

// --- Update Student Profile ---
function updateProfile() {
  const dept = document.getElementById("dept").value;
  const year = document.getElementById("year").value;
  const user = auth.currentUser;
  db.collection("users").doc(user.uid).update({ dept, year })
    .then(() => alert("Profile updated!"));
}

// --- Update Alumni Profile ---
function updateAlumniProfile() {
  const company = document.getElementById("company").value;
  const designation = document.getElementById("designation").value;
  const user = auth.currentUser;
  db.collection("users").doc(user.uid).update({ company, designation })
    .then(() => alert("Profile updated!"));
}
