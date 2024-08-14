import Image from "next/image";
import React, { FunctionComponent } from "react";

interface MemberCardProps {
  firstName: string;
  middleName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  profilePictureUrl: string;
  subscriptionYear: number;
  lang: string;
}

export const MemberCard: FunctionComponent<MemberCardProps> = ({
  firstName,
  middleName,
  lastName,
  email,
  phoneNumber,
  profilePictureUrl,
  subscriptionYear,
  lang,
}) => {
  return (
    <div className="flex items-center p-4 border rounded-lg shadow-md bg-white">
      <Image
        src={profilePictureUrl}
        alt={`${firstName} ${lastName}`}
        width="100"
        height="100"
        className="w-16 h-16 rounded-full mr-4"
      />
      <div>
        <h2 className="font-bold text-lg">
          {firstName} {middleName} {lastName}
        </h2>
        <p className="text-sm text-gray-500">Member since {subscriptionYear}</p>
        <p className="mt-2">
          You can contact me using my email{" "}
          <a href={`mailto:${email}`} className="text-blue-500 font-bold">
            {email}
          </a>{" "}
          or my phone number <span className="font-bold">{phoneNumber}</span>.
        </p>
        <p>{lang}</p>
      </div>
    </div>
  );
};
