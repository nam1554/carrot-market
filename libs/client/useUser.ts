import { User } from "@prisma/client";
import { useRouter } from "next/router";
import { useEffect } from "react";
import useSWR from "swr";

interface ProfileResponse {
  ok: boolean;
  profile: User;
}

export default function useUser() {
  const { data, error } = useSWR<ProfileResponse>(
    //suspense 사용으로 서버에서 한번 fetch 하는데 서버 내에서 상대경로 때문에 에러가 발생
    //typeof window === "undefined" -> 서버일 경우 null
    typeof window === "undefined" ? null : "/api/users/me"
  );
  const router = useRouter();
  useEffect(() => {
    if (data && !data.ok) {
      router.replace("/enter");
    }
  }, [data, router]);
  // const [user, setUser] = useState();
  // const router = useRouter();
  // useEffect(() => {
  //   fetch("/api/users/me")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       if (!data.ok) {
  //         return router.replace("/enter");
  //       }
  //       setUser(data.profile);
  //     });
  // }, [router]);
  return { user: data?.profile, isLoading: !data && !error };
}
