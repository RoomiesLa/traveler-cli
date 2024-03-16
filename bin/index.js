#! /usr/bin/env node

import { Command } from "commander";
import { list } from "../commands/list.js";

const program = new Command("list");

program.command("login").description("...").action(list);
program.command("report").description("...").action(list);

program.parse()