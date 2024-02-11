'use server';
import {MenuItem, MenuItemOptions} from "primereact/menuitem";
import {PanelMenu} from "primereact/panelmenu";

export default async function Home() {
    const itemRenderer = async (item: MenuItem, options: MenuItemOptions) => {
        'use server';
        return (
            <div>
                <span>{item.label}</span>
            </div>
        );
    };
    const myItems = [
        {
            id: 'users',
            label: 'Users',
            icon: 'pi pi-fw pi-users',
            template: itemRenderer
        },
        {
            id: 'events',
            label: 'Events',
            icon: 'pi pi-fw pi-calendar',
        }
    ];

  return (
      <div>
            <h1>Home</h1>
          <PanelMenu model={myItems} className="w-full md:w-20rem"/>
      </div>
  );
}
