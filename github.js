class Github {
  constructor() {
    this.client_id = '408b7295a6c00528ce88';
    this.client_secret = 'ac6c5778beb71d351fce28639dc60aaf031b2d57';
    this.repos_count = 5;
    this.repost_sort = 'created: asc';
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repost_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();


    return {
      profile,
      repos
    }
  }
}