#! /usr/bin/env node

import { Command } from "commander";
import { report } from "../commands/report.js";

const program = new Command();

program.command("report").description("...").action(report);

program.parse()