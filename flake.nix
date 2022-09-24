{
  description = "Sample Nix ts-node build";
  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs/nixos-unstable";
    flake-utils.url = "github:numtide/flake-utils";
    gitignore = {
      url = "github:hercules-ci/gitignore.nix";
      inputs.nixpkgs.follows = "nixpkgs";
    };
    dream2nix.url = "github:nix-community/dream2nix";
  };
  outputs = { self, nixpkgs, flake-utils, gitignore, dream2nix, ... }:
   #let
    #dream2nixOutputs = 
    dream2nix.lib.makeFlakeOutputs {
      systems = flake-utils.lib.defaultSystems;
      config.projectRoot = ./.;
      source = gitignore.lib.gitignoreSource ./.;
   # app = self.packages.x86_64-linux.sl-web-config;
    };
    #app = self.packages.x86_64-linux.sl-web-config;
  #in nixpkgs.lib.recursiveUpdate dream2nixOutputs; 
}

