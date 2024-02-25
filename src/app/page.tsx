'use server';
import {MenuItem, MenuItemOptions} from "primereact/menuitem";
import {PanelMenu} from "primereact/panelmenu";
import Link from "next/link";

export default async function Home() {

  return (
      <div>
            <h1>Home</h1>
          <Link href={`/test`}>Test</Link>
      </div>
  );
}
