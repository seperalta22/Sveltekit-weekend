<div class="posts">
  <aside>
    <h4>Posts</h4>
    <nav>
      <ul>
        <li>
          <a href="/posts/1">Post 1</a>
        </li>
        <li>
          <a href="/posts/2">Post 2</a>
        </li>
        <li>
          <a href="/posts/3">Post 3</a>
        </li>

      </ul>

      
    </nav>
  </aside>
  <main>
    <slot/>
  </main>
</div>


<style>
  .posts{
    display: grid;
    gap: 2rem;
    grid-template-columns: 200px 1fr;
  }
</style>