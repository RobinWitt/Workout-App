import Link from "next/link";

export default function Navigation() {
  return (
    <footer>
      <nav>
        <Link href="/workouts">All Workouts</Link>
        <Link href="/AddNewWorkout">Add new Workout</Link>
        <Link href="/profile">Profile</Link>
        <Link href="/settings">Settings</Link>
      </nav>
    </footer>
  );
}
