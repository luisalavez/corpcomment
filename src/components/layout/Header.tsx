import { useFeedbackItemsStore } from "../../stores/feedbackItemsStore";
import FeedBackForm from "../feedback/FeedBackForm";
import Logo from "../Logo";
import PageHeading from "../PageHeading";
import Pattern from "../Pattern";

export default function Header() {
  const addItemToList = useFeedbackItemsStore((state) => state.addItemToList);
  return <header>
    <Pattern/>
    <Logo/>
    <PageHeading/>
    <FeedBackForm onAddToList={addItemToList} />
  </header>
}
