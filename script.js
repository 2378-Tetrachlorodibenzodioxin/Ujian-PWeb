function showBooks() {
    const mainContent = document.getElementById('mainContent');
    mainContent.innerHTML = `
        <h2>Book Management</h2>
        <br>
        <form id="bookForm">
            <div class="form-group">
                <label>Book ID</label>
                <input type="text" id="ID_Buku" name="ID_Buku" required>
            </div>

            <div class="form-group">
                <label>Title</label>
                <input type="text" id="judul" name="judul" required>
            </div>

            <div class="form-group">
                <label>Author</label>
                <input type="text" id="pengarang" name="pengarang" required>
            </div>

            <div class="form-group">
                <label>Price</label>
                <input type="number" id="harga" name="harga" required>
            </div>

             <div class="form-group">
                <label>Ketersediaan</label>
                <select id="ketersediaan" name="ketersediaan" required>
                    <option value="1">Tersedia</option>
                    <option value="0">Tidak Tersedia</option>
                </select>
            </div>

            <div class="form-group">
                <label>Publisher</label>
                <select id="pub_ID" name="pub_ID" required>
                    <option value="">Select Publisher</option>
                    <option value="1">Publisher 1</option>
                    <option value="2">Publisher 2</option>
                </select>
            </div>

            <button type="submit">Add Book</button>
        </form>

        <table>
            <thead>
                <tr>
                    <th>Book ID</th>
                    <th>Judul</th>
                    <th>Pengarang</th>
                    <th>Harga</th>
                    <th>Ketersediaan</th>
                    <th>Publisher</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody id="bookList">
                <!-- Books will be listed here -->
            </tbody>
        </table>
    `;

    // Load publishers into select
    loadPublishers();

    document.getElementById('bookForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const formData = {
            ID_Buku: document.getElementById('ID_Buku').value,
            judul: document.getElementById('judul').value,
            pengarang: document.getElementById('pengarang').value,
            harga: document.getElementById('harga').value,
            ketersediaan: document.getElementById('ketersediaan').value,
            pub_ID: document.getElementById('pub_ID').value
        };

        fetch('api/books.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => {
            if(data.success) {
                loadBooks();
                e.target.reset();
            }
        })
        .catch(error => console.error('Error:', error));
    });

    loadBooks();
}

function showMembers() {
    const mainContent = document.getElementById('mainContent');
    mainContent.innerHTML = `
        <h2>Member Management</h2>
        <form id="memberForm">

            <div class="form-group">
                <label>Member ID</label>
                <input type="text" id="memb_ID" name="memb_ID" required>
            </div>

            <div class="form-group">
                <label>Name</label>
                <input type="text" id="memb_Name" name="memb_Name" required>
            </div>

            <div class="form-group">
                <label>Address</label>
                <input type="text" id="address" name="address" required>
            </div>

            <div class="form-group">
                <label>Member Type</label>
                <select id="memb_Type" name="memb_Type" required>
                    <option value="">Select Type</option>
                    <option value="student">Student</option>
                    <option value="faculty">Faculty</option>
                </select>
            </div>

            <div class="form-group">
                <label>Member Info</label>
                <textarea id="memb_Info" name="memb_Info"></textarea>
            </div>

            <div class="form-group">
                <label>Expiry Date</label>
                <input type="date" id="expiry_date" name="expiry_date" required>
            </div>

            <button type="submit">Add Member</button>
        </form>

        <table>
            <thead>
                <tr>
                    <th>Member ID</th>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Type</th>
                    <th>Info</th>
                    <th>Expiry Date</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody id="memberList">
                <!-- Members will be listed here -->
            </tbody>
        </table>
    `;

    document.getElementById('memberForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const formData = {
            memb_ID: document.getElementById('memb_ID').value,
            memb_Name: document.getElementById('memb_Name').value,
            address: document.getElementById('address').value,
            memb_Type: document.getElementById('memb_Type').value,
            memb_Info: document.getElementById('memb_Info').value,
            expiry_date: document.getElementById('expiry_date').value
        };

        fetch('api/members.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => {
            if(data.success) {
                loadMembers();
                e.target.reset();
            }
        })
        .catch(error => console.error('Error:', error));
    });

    loadMembers();
}

function showPublishers() {
    const mainContent = document.getElementById('mainContent');
    mainContent.innerHTML = `
        <h2>Publisher Management</h2>
        <form id="publisherForm">
            <div class="form-group">
                <label>Publisher ID</label>
                <input type="text" id="pub_ID" name="pub_ID" required>
            </div>

            <div class="form-group">
                <label>Name</label>
                <input type="text" id="name" name="name" required>
            </div>

            <div class="form-group">
                <label>Address</label>
                <input type="text" id="address" name="address" required>
            </div>
            <button type="submit">Add Publisher</button>
        </form>

        <table>
            <thead>
                <tr>
                    <th>Publisher ID</th>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody id="publisherList">
                <!-- Publishers will be listed here -->
            </tbody>
        </table>
    `;

    document.getElementById('publisherForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const formData = {
            pub_ID: document.getElementById('pub_ID').value,
            name: document.getElementById('name').value,
            address: document.getElementById('address').value
        };

        fetch('api/publishers.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => {
            if(data.success) {
                loadPublishers();
                e.target.reset();
            }
        })
        .catch(error => console.error('Error:', error));
    });

    loadPublishers();
}

// Tambahkan fungsi ini di file JavaScript
async function loadBooks() {
    try {
        const response = await fetch('api/books.php');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const books = await response.json();
        const bookList = document.getElementById('bookList');
        bookList.innerHTML = books.map(book => `
            <tr>
                <td>${book.ID_Buku}</td>
                <td>${book.judul}</td>
                <td>${book.pengarang}</td>
                <td>${book.harga}</td>
                <td>${book.ketersediaan == 1 ? 'Tersedia' : 'Tidak Tersedia'}</td>
                <td>${book.pub_ID}</td>
                <td>
                    <button onclick="editBook('${book.ID_Buku}')" class="btn btn-warning btn-sm">
                        <i class="fas fa-edit"></i> Edit
                    </button>
                    <button onclick="deleteBook('${book.ID_Buku}')" class="btn btn-danger btn-sm">
                        <i class="fas fa-trash"></i> Delete
                    </button>
                </td>
            </tr>
        `).join('');
    } catch (error) {
        console.error('Error loading books:', error);
        alert('Error loading books');
    }
}

async function loadMembers() {
    try {
        const response = await fetch('api/members.php');
        const members = await response.json();
        const memberList = document.getElementById('memberList');
        memberList.innerHTML = members.map(member => `
            <tr>
                <td>${member.memb_ID}</td>
                <td>${member.memb_Name}</td>
                <td>${member.address}</td>
                <td>${member.memb_Type}</td>
                <td>${member.memb_Info}</td>
                <td>${member.expiry_date}</td>
                <td>
                    <button onclick="deleteMember('${member.memb_ID}')">Delete</button>
                    <button onclick="editMember('${member.memb_ID}')">Edit</button>
                </td>
            </tr>
        `).join('');
    } catch (error) {
        console.error('Error:', error);
    }
}

async function loadPublishers() {
    try {
        const response = await fetch('api/publishers.php');
        const publishers = await response.json();
        const publisherList = document.getElementById('publisherList');
        if (publisherList) {
            publisherList.innerHTML = publishers.map(publisher => `
                <tr>
                    <td>${publisher.pub_ID}</td>
                    <td>${publisher.name}</td>
                    <td>${publisher.address}</td>
                    <td>
                        <button onclick="deletePublisher('${publisher.pub_ID}')">Delete</button>
                        <button onclick="editPublisher('${publisher.pub_ID}')">Edit</button>
                    </td>
                </tr>
            `).join('');
        }

        // Update publisher select in book form if it exists
        const publisherSelect = document.getElementById('pub_ID');
        if (publisherSelect) {
            publisherSelect.innerHTML = '<option value="">Select Publisher</option>' +
            publishers.map(pub => `
                <option value="${pub.pub_ID}">${pub.name}</option>
            `).join('');
        }
    } catch (error) {
        console.error('Error:', error);
    }
}

// Delete functions
async function deleteBook(ID_Buku) {
    if (confirm('Are you sure you want to delete this book?')) {
        try {
            const response = await fetch(`api/books.php?ID_Buku=${ID_Buku}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const result = await response.json();
            console.log('Delete response:', result);
            
            if (result.success) {
                await loadBooks();
                alert(result.message || 'Book deleted successfully');
            } else {
                alert(result.message || 'Failed to delete book');
            }
        } catch (error) {
            console.error('Error deleting book:', error);
            alert('Error deleting book. Please check console for details.');
        }
    }
}

async function deleteMember(memb_ID) {
    if (confirm('Are you sure you want to delete this member?')) {
        try {
            const response = await fetch(`api/members.php?memb_ID=${memb_ID}`, {
                method: 'DELETE'
            });
            const result = await response.json();
            if (result.success) {
                loadMembers();
            }
        } catch (error) {
            console.error('Error:', error);
        }
    }
}

async function deletePublisher(pub_ID) {
    if (confirm('Are you sure you want to delete this publisher?')) {
        try {
            const response = await fetch(`api/publishers.php?pub_ID=${pub_ID}`, {
                method: 'DELETE'
            });
            const result = await response.json();
            if (result.success) {
                loadPublishers();
            }
        } catch (error) {
            console.error('Error:', error);
        }
    }
}

// Edit functions
async function editBook(ID_Buku) {
    try {
        const response = await fetch(`api/books.php?id=${ID_Buku}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const book = await response.json();
        
        // Mengisi form edit dengan data buku
        document.getElementById('edit_ID_Buku').value = book.ID_Buku;
        document.getElementById('edit_judul').value = book.judul;
        document.getElementById('edit_pengarang').value = book.pengarang;
        document.getElementById('edit_harga').value = book.harga;
        document.getElementById('edit_ketersediaan').checked = book.ketersediaan == 1;
        document.getElementById('edit_pub_ID').value = book.pub_ID;
        
        // Membuka modal
        const editModal = new bootstrap.Modal(document.getElementById('editModal'));
        editModal.show();
    } catch (error) {
        console.error('Error fetching book details:', error);
        alert('Error loading book details');
    }
}

// Fungsi untuk update buku
async function updateBook() {
    try {
        const bookData = {
            ID_Buku: document.getElementById('edit_ID_Buku').value,
            judul: document.getElementById('edit_judul').value,
            pengarang: document.getElementById('edit_pengarang').value,
            harga: document.getElementById('edit_harga').value,
            ketersediaan: document.getElementById('edit_ketersediaan').checked ? 1 : 0,
            pub_ID: document.getElementById('edit_pub_ID').value
        };

        const response = await fetch('api/books.php', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(bookData)
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        
        if (result.success) {
            // Tutup modal
            const editModal = bootstrap.Modal.getInstance(document.getElementById('editModal'));
            editModal.hide();
            
            // Refresh tabel
            await loadBooks();
            
            alert('Book updated successfully');
        } else {
            alert(result.message || 'Failed to update book');
        }
    } catch (error) {
        console.error('Error updating book:', error);
        alert('Error updating book');
    }
}


// Show books by default when page loads
showBooks();