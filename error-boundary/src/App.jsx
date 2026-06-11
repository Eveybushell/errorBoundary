import WeatherWidget from "./WeatherWidget"
import ErrorBoundary from "./ErrorBoundary"
import NewsFeed from "./NewsFeed"

export default function App() {
  return (
    <div>
    <NewsFeed data={{headline: "Sun mysteriously destroyed",
    article: "Local data scientist suspected. Claims self-defense."}}/>
    <ErrorBoundary fallback={<p>Out of order</p>}>
      <WeatherWidget data={null}/>
    </ErrorBoundary>
    </div>
  )
}