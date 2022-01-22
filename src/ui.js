class UI {
    constructor() {
        this.post = document.querySelector("#posts");
        this.titleInput = document.querySelector("#title");
        this.bodyInput = document.querySelector("#body");
        this.idInput = document.querySelector("#id");
        this.postSubmit = document.querySelector(".post-submit");
        this.forState = "add";
    }
    showPosts(posts) {
        let output = '';
        posts.forEach((post) => {
            output += `
            <div class="card mb-3">
             <div class="card-body">
              <h4 class="card-title">${post.title}</h4>
              <p class="card-text">${post.body}</p>
              <a style="text-decoration: none;" href="#" class="edit card-link" data-id="${post.id}">
               <p>Edit</p>
              </a>
              <a style="text-decoration: none;" href="#" class="delete card-link" data-id="${post.id}">
               <p style="color: red;">Delete</p>
              </a>
             </div>
            </div>
            `;
        })
        this.post.innerHTML = output;
    }
}

export const ui = new UI();