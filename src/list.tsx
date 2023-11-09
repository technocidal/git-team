import { List } from "@raycast/api";
import { useExec } from "@raycast/utils";
import { useEffect, useState } from "react";

export default function Command() {
  
  const { isLoading, data } = useExec("git", ["team", "list"]);

  useEffect(() => {
    console.log(data);

  }, [data]);
  
  return <List isLoading={isLoading}>
    <List.Item title={data}></List.Item>
  </List>;
} 