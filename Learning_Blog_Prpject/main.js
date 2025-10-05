// Comment form submission
function setupCommentForm(postId) {
    const form = document.getElementById('commentForm');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        // Get user input
        const author = document.getElementById('authorName').value.trim();
        const comment = document.getElementById('commentText').value.trim();

        // Basic validation
        if (!author || !comment) {
            alert('Please enter your name and comment.');
            return;
        }

        // Send POST request
        fetch('https://basic-blog.teamrabbil.com/api/create-comment', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                list_id: postId,   // 
                author: author,
                comment: comment
            })
        })
            .then(response => response.json())
            .then(data => {
                if (data.status === 'success') {
                    // Reset form
                    form.reset();

                    // Dynamically add the new comment
                    const commentsList = document.getElementById('comment-list');
                    const now = new Date().toLocaleDateString();

                    const newComment = `
                    <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <div class="flex items-center gap-3 mb-3">
                            <div class="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-semibold">
                                ${author[0].toUpperCase()}
                            </div>
                            <div>
                                <div class="font-semibold text-gray-800">${author}</div>
                                <div class="text-sm text-gray-500">${now}</div>
                            </div>
                        </div>
                        <p class="text-gray-600 leading-relaxed">${comment}</p>
                    </div>
                `;

                    commentsList.insertAdjacentHTML('afterbegin', newComment);
                } else {
                    alert('Failed to post comment. Please try again.');
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert('Something went wrong while posting your comment.');
            });
    });
}
// Load post details and comments when modal is opened
function loadComments(postId) {
    // Fetch post details and populate modal content
    fetch(`https://basic-blog.teamrabbil.com/api/post-details/${postId}`).then((response) => response.json())
        .then((data) => {
            document.querySelector('#post-content').textContent = data.postDetails.content;
            document.querySelector('#post-image').setAttribute('src', data.postDetails.img);

            const commentslist = document.querySelector('#comment-list');
            commentslist.innerHTML = "";
            data.postComments.forEach(comment => {
                commentslist.innerHTML += ` <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                            <div class="flex items-center gap-3 mb-3">
                                <div
                                    class="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-semibold">
                                    ${comment.author[0].toUpperCase()}
                                </div>
                                <div>
                                    <div class="font-semibold text-gray-800">${comment.author}</div>
                                    <div class="text-sm text-gray-500">${comment.date}</div>
                                </div>
                            </div>
                            <p class="text-gray-600 leading-relaxed">${comment.comment}</p>
                        </div> `;
            });
        });
}
// Modal functions
function openModal(postId) {
    const modal = document.getElementById('postModal');
    if (modal) {
        document.body.classList.add('modal-open');
        modal.classList.remove('hidden');
        modal.classList.add('flex');

        // Load post details and comments
        loadComments(postId);

        // Initialize comment form functionality
        setupCommentForm(postId);

    }
}
function closeModal() {
    const modal = document.getElementById('postModal');
    if (modal) {
        modal.classList.remove('flex');
        modal.classList.add('hidden');
        document.body.classList.remove('modal-open');
    }
}



// Close modal when clicking outside
document.getElementById('postModal')?.addEventListener('click', function (e) {
    if (e.target === this) {
        closeModal();
    }
});

// Fetch and display categories
function categoryFilter(id) {
    fetch(`https://basic-blog.teamrabbil.com/api/post-list/${id}`).then((response) => response.json())
        .then((data) => {
            postsContainer.innerHTML = "";
            data.forEach(element => {
                postsContainer.innerHTML += `<article
                        class="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all overflow-hidden group">
                        <div class="relative overflow-hidden">
                            <img src=${element.img} alt=${element.title}
                                class="w-full h-56 object-cover transform group-hover:scale-105 transition-transform duration-300">
                            <div class="absolute top-4 left-4">
                                <span
                                    class="px-4 py-2 bg-white/90 backdrop-blur-sm rounded-lg text-purple-600 text-sm font-semibold">
                                    Technology
                                </span>
                            </div>
                        </div>
                        <div class="p-6">
                            <h3
                                class="text-xl font-bold text-gray-800 mb-3 group-hover:text-purple-600 transition-colors">
                                ${element.title}
                            </h3>
                            <p class="text-gray-600 mb-4 line-clamp-2">
                                ${element.short}
                            </p>
                            <div class="flex items-center justify-between">
                                <span class="text-sm text-gray-500">Dec 15, 2024</span>
                                <button onclick="openModal('post-1')"
                                    class="text-purple-600 hover:text-purple-700 font-medium inline-flex items-center gap-2 transition-colors">
                                    Read more →
                                </button>
                            </div>
                        </div>
                    </article>`


            });
        });

}

// Fetch and display category buttons
const catButtons = document.querySelector("#category-buttons");

fetch('https://basic-blog.teamrabbil.com/api/post-categories').then((response) => response.json())
    .then((data) => {
        data.forEach(element => {
            catButtons.innerHTML += `<button onclick="categoryFilter(${element.id})"
                                    class="px-4 py-2 rounded-xl bg-gray-100 text-gray-600 hover:bg-purple-600 hover:text-white hover:shadow-lg hover:shadow-purple-200 transition-all text-sm sm:text-base whitespace-nowrap">
                                ${element.name}
                            </button>`;
        });
    });


// Fetch and display posts

const postsContainer = document.querySelector("#posts-container");
fetch('https://basic-blog.teamrabbil.com/api/post-newest').then((response) => response.json())
    .then((data) => {
        postsContainer.innerHTML = "";
        data.forEach(element => {
            postsContainer.innerHTML += `<article
                        class="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all overflow-hidden group">
                        <div class="relative overflow-hidden">
                            <img src=${element.img} alt=${element.title}
                                class="w-full h-56 object-cover transform group-hover:scale-105 transition-transform duration-300">
                            <div class="absolute top-4 left-4">
                                <span
                                    class="px-4 py-2 bg-white/90 backdrop-blur-sm rounded-lg text-purple-600 text-sm font-semibold">
                                    Technology
                                </span>
                            </div>
                        </div>
                        <div class="p-6">
                            <h3
                                class="text-xl font-bold text-gray-800 mb-3 group-hover:text-purple-600 transition-colors">
                                ${element.title}
                            </h3>
                            <p class="text-gray-600 mb-4 line-clamp-2">
                                ${element.short}
                            </p>
                            <div class="flex items-center justify-between">
                                <span class="text-sm text-gray-500">Dec 15, 2024</span>
                                <button onclick="openModal(${element.id})"
                                    class="text-purple-600 hover:text-purple-700 font-medium inline-flex items-center gap-2 transition-colors">
                                    Read more →
                                </button>
                            </div>
                        </div>
                    </article>`


        });
    });
