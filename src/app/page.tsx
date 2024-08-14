import Link from "next/link";
import { MemberCard } from "@/components/MemberCard";
const { signal } = new AbortController();
import { RefreshButton } from "@/components/RefreshButton";

const getRandomUser = async () => {
  const res = await fetch("https://randomuser.me/api/?nat=fr&gender=female", {
    // 3) Manage Request Memoization
    signal,
    // 2) Manage Data Cache
    cache: "no-store",
  });
  const { results } = await res.json();
  return results[0];
};

export default async function DynamicPage(props: {
  // 1) Manage Full Route Cache
  searchParams: { lang?: string };
}) {
  const lang = props.searchParams["lang"] ?? "en";

  const subscriptionYear = 1999 + Math.round(Math.random() * 25);
  const user1 = await getRandomUser();
  const user2 = await getRandomUser();

  return (
    <div className="p-6">
      <MemberCard
        firstName={user1.name.first}
        middleName={user2.name.first}
        lastName={user1.name.last}
        email={user1.email}
        phoneNumber={user1.phone}
        profilePictureUrl={user1.picture.large}
        subscriptionYear={subscriptionYear}
        lang={lang}
      />
      {/* 4) Manage Router Cache */}
      <RefreshButton />
      <Link href="/test-component">Go to test-component</Link>
    </div>
  );
}
