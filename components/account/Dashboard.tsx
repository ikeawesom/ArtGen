export function SideBar() {
  return (
    <div className="flex-1 sm:relative w-1/5 min-h-screen bg-violet-900 absolute -translate-x-full sm:translate-x-0 sm:p-5">
      <ul>
        <li>
          <h1>Home</h1>
        </li>
        <li>
          <h1>Projects</h1>
        </li>
        <li>
          <h1>Settings</h1>
        </li>
      </ul>
    </div>
  );
}

export function Dashboard() {}
