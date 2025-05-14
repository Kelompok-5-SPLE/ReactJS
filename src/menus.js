const menus = [];
const addMenu = (menu) => {
  menus.push(menu);
};

const addSubMenu = (label, subMenu, menu = menus) => {
  for (const item of menu) {
    if (item.label === label) {
      item.subMenus.push(subMenu);
      return;
    }
    if (item.subMenus) {
      addSubMenu(label, subMenu, item.subMenus);
    }
  }
};

export const settingsMenu = [
  {
    route: '#',
    label: 'Pengaturan',
    permission: 'administrator',
    subMenus: [
      {
        route: '/settings/appearance',
        label: 'Pengaturan Tampilan',
        permission: 'administrator',
      },
      {
        route: '/settings/role',
        label: 'Pengaturan Role',
        permission: 'administrator',
      },
      {
        route: '/settings/user',
        label: 'Pengaturan User',
        permission: 'administrator',
      },
    ]
  },
]

export default menus;

addMenu({
	id: '_BLxJgCcvEfCGRdp12HFTEA',
	route: '/menu',
    label: 'Menu',
    permission: '',
	subMenus: [],
})

addMenu({
	id: '_YfVmoCthEfCZqva5fscC8Q',
	route: '/voucher',
    label: 'Voucher',
    permission: '',
	subMenus: [],
})

addMenu({
	id: '_6ye_YCtkEfCZqva5fscC8Q',
	route: '/dashboard',
    label: '/AdminDashboard',
    permission: '',
	subMenus: [],
})

addMenu({
	id: '_laAk8CtvEfCMAuAFSyCjsQ',
	route: '/promo',
    label: 'Promo',
    permission: '',
	subMenus: [],
})
