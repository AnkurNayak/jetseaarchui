interface OverlayScreenProps {
  toogleScreen: () => void;
}
const OverlayScreen = ({ toogleScreen }: OverlayScreenProps) => {
  return (
    <div
      className="hideen md:flex fixed inset-0 bg-[#0009] z-[80]"
      onClick={toogleScreen}
    ></div>
  );
};

export default OverlayScreen;
