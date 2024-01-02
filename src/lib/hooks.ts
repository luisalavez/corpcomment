import { useContext, useEffect, useState } from "react";
import { FeedbackItemsContext } from "../components/context/FeedbackItemsContextProvider";
import { TFeedbackItem } from "./types";

export function useFeedbackItemsContext() {
    const context = useContext(FeedbackItemsContext);
    if (!context) {
      throw new Error("FeedbackItemsContext is not defined in FeedbackList component");
    }
    return context;
  }

export function useFeedbackItems()  {
  const [feedbackItems, setFeedbackItem] = useState<TFeedbackItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  
  useEffect(() => {
    const fetchFeedbackItems = async () => {
    setIsLoading(true);
   
    try {
      
      const response = await fetch(
        "https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks"
      );
     
      if(!response.ok) {
        throw new Error();
      }
     
      const data = await response.json();
      setFeedbackItem(data.feedbacks);  
      
    } catch {
      setErrorMessage("something went wrong") 
    }
     setIsLoading(false);
  };

    fetchFeedbackItems();
   },[]);

   return {
    feedbackItems,
    isLoading,
    errorMessage,
    setFeedbackItem,
   };
}