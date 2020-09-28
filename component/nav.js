import Link from "next/link";

function Navigation() {
  return (
    <div>
      <ul>
        <li>
          <Link href="/[]" as={`/index`}>
            <a>Sitmov.com</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
