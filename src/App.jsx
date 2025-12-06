import Profile from "./components/profile/Profile";
import FriendList from "./components/friendlist/FriendList";
import TransactionHistory from "./components/transactionhistory/TransactionHistory";

import userData from "./userData.json";
import friends from "./friends.json";
import transactions from "./transactions.json";

import "./App.css";

export default function App() {
  return (
    <div className="app">
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />

      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />
    </div>
  );
}