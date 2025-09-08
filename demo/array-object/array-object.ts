/* eslint-disable */
import { strict as assert } from "assert";

type Link = 
{
    tittle : string;
    url: string;
};

const microsoft =
{
    title: "microsoft",
    url: "microsoft.com",
};

const typescript =
{
    title: "TypeScript",
    url: "tyypescript",
};

const links = [microsoft, typescript];

const tsUrl = links[1].url ;

links[0].title = "Microsoft";
