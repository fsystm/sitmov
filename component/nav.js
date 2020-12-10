import Link from "next/link";



function Navigation() {
  return (
    <div>
      <ul>
        <li>
          <Link href="/" as={``}>
            <a>Sitmov.com</a>
          </Link>
        </li>
        <li className="demo">
          Demo
        </li>
      </ul>
      
    </div>
  );
}

export default Navigation;
