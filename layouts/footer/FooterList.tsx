interface IFooterList {
  title: string;
  subTitle: [{ id: number; listTitle: string }];
}

interface Ilist {
  id: number;
  listTitle: string;
}
const FooterList = ({ lists }: any) => {
  return (
    <div className="px-3">
      <h6 className="text-white mb-3 text-uppercase">{lists.title}</h6>
      <ul className="cursor-pointer mb-4">
        {lists.subTitle.map((list: Ilist) => (
          <li
            className="text-white py-1.5 opacity-60 text-sm hover:translate-x-2 hover:opacity-100 transition duration-700"
            key={list.id}
          >
            {list.listTitle}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterList;
