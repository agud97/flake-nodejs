{
  inputs = {
    nixpkgs.url = "nixpkgs/nixos-22.05";
  };
 
  outputs = { self, nixpkgs }: {

    nixosConfigurations = let
      system = "x86_64-linux";
      lib = nixpkgs.lib;
      pkgs = import nixpkgs {
        inherit system;
        config.allowUnfree = true;
      };
     in {
         exampleIso = nixpkgs.lib.nixosSystem {
         inherit system;
         modules =  [
           "${nixpkgs}/nixos/modules/installer/cd-dvd/installation-cd-minimal.nix"
         ];
      };
        mysystem = nixpkgs.lib.nixosSystem {
          system = "x86_64-linux";
          modules = [
                      ./configuration.nix
           ];
        }; 
     };
   };
}

