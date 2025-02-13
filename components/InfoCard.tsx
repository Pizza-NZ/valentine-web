import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";
import HeartImage from "./HeartImage";
import YesButton from "./YesButton";
import NoButton from "./NoButton";

const InfoCard = () => {
  return (
    <Card className="w-1/2 h-1/3 text-center">
      <CardHeader className="h-1/6">
        <HeartImage width={200} height={200} />
        <CardTitle className="font-bold text-xl">Will You Be My Valetines?</CardTitle>
        <CardDescription className="text-md">
          I&apos;ve been meaning to ask you something special...
        </CardDescription>
      </CardHeader>
      <CardContent className=" space-y-1.5 p-6 h-1/6">
        <YesButton />
        
        <br />
        
        <NoButton />
        
      </CardContent>
    </Card>
  );
};

export default InfoCard;
