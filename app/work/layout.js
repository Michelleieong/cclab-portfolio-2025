import WorkBackNav from "../../components/WorkBackNav";

export default function WorkLayout({ children }) {
  return (
    <>
      <WorkBackNav />
      {children}
    </>
  );
}
