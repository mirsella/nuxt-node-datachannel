import nodeDataChannel from "node-datachannel";
export default defineEventHandler((event) => {
  nodeDataChannel.initLogger("Verbose");
});
