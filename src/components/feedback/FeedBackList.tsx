
import FeedBackItem from "./FeedBackItem"
import Spinner from "../Spinner";
import ErrorMessage from "../ErrorMessage";
import { useFeedbackItemsStore } from "../../stores/feedbackItemsStore";

export default function FeedBackList() {
  const isLoading = useFeedbackItemsStore((state) => state.isLoading);
  const errorMessage = useFeedbackItemsStore((state) => state.errorMessage);
  const filteredFeedbackItems = useFeedbackItemsStore((state) => state.getFilteredFeedbackItems());

  return <ol className="feedback-list">
    { isLoading && <Spinner/>}

    {errorMessage && <ErrorMessage message={errorMessage}/>}

    {filteredFeedbackItems.map((feedbackItem) => (
      <FeedBackItem key={feedbackItem.id} feedbackItem={feedbackItem}/>
    ))}
  </ol>
}
