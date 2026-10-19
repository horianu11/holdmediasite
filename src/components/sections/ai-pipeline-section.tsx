'use client';

import { useState } from 'react';
import {
  Brain,
  Cpu,
  Cube,
  ArrowsClockwise,
  Sparkle,
  ArrowRight,
  TerminalWindow,
} from '@phosphor-icons/react';

type FlowNodeId = 'ideation' | 'pipeline' | 'output';

interface FlowNode {
  id: FlowNodeId;
  step: string;
  title: string;
  subtitle: string;
  icon: typeof Brain;
  color: string;
  tag: string;
  details: string[];
  metrics: { label: string; value: string };
  telemetry: string;
  codeSnippet: string;
}

const FLOW_NODES: FlowNode[] = [
  {
    id: 'ideation',
    step: 'PHASE 01',
    title: 'Ideation',
    subtitle: 'Spatial Lore Synthesis & JSON Scene Graphs',
    icon: Brain,
    color: '#D97706', // Warm amber / terracotta
    tag: 'CLAUDE REASONING ENGINE',
    details: [
      'Claude-driven spatial lore synthesis & multi-layered architectural backstories',
      'Structured JSON scene graphs & procedural environment tokens',
      'Token-cached world Bibles with sub-2-hour creative turnaround',
    ],
    metrics: { label: 'Concept Synthesis', value: '< 2 hrs vs 3 weeks' },
    telemetry: 'PROMPT_CACHE_HIT: 94.2%',
    codeSnippet: `// Phase 01: Claude Lore Synthesis & JSON Scene Graph
{
  "scene_id": "hm_cavern_anomaly_04",
  "narrative_bible": "Subterranean flooded reservoir under brutalist telemetry",
  "architectural_style": "Brutalist Concrete x Levitating Monolith",
  "claude_prompt_cache": {
    "cache_hit_rate": 0.942,
    "system_tokens": 12840,
    "latency_delta": "-86.4%"
  },
  "environment_parameters": {
    "lux_level": 42000,
    "water_index_refraction": 1.333,
    "atmosphere": "Volumetric Raymarched Humidity"
  }
}`,
  },
  {
    id: 'pipeline',
    step: 'PHASE 02',
    title: 'AI Pipeline',
    subtitle: 'Hold Media 3D MCP Server (mcp__holdmedia_3d)',
    icon: Cpu,
    color: '#C2410C', // Deep Anthropic terracotta
    tag: 'MCP TOOL INTEGRATION',
    details: [
      'MCP tool calls: mcp__holdmedia_3d__compile_osl_shader & generate_vex_graph',
      'Automated procedural GLSL/OSL dermal shaders and Houdini VEX node graphs',
      'Automated shader compilation evals and test pipelines with 98.4% pass rate',
    ],
    metrics: { label: 'Iteration Velocity', value: '14.2x Faster Turnaround' },
    telemetry: 'SHADER_EVAL_PASS_RATE: 98.4%',
    codeSnippet: `// Phase 02: Hold Media 3D MCP Server Tool Execution
const mcpResponse = await mcpClient.callTool({
  name: "mcp__holdmedia_3d__compile_osl_shader",
  arguments: {
    target: "Octane_Spectral_v2024",
    material_type: "Subsurface_Dermal_DualLobe",
    ior: 1.41,
    melanin_depth_mm: 1.42,
    sss_radius: [0.48, 0.18, 0.09],
    eval_suite: "HoldMedia_Shader_Bench_v2"
  }
});
// Shader Eval Pass Rate: 98.4% | Turnaround: 14.2x speedup`,
  },
  {
    id: 'output',
    step: 'PHASE 03',
    title: '3D Output',
    subtitle: 'Real-Time AAA Engine Staging & Nanite Virtualization',
    icon: Cube,
    color: '#B45309', // Burnished bronze
    tag: 'PRODUCTION ASSET',
    details: [
      'Automated Unreal Engine 5.4 Nanite micro-geometry & Lumen volumetric staging',
      'Automated LOD cascade verification and MetaHuman DNA rigging integration',
      'Real-time viewport telemetry delivering 120 FPS staged production assets',
    ],
    metrics: { label: 'Render Optimization', value: '120 FPS Real-time Staged' },
    telemetry: 'NANITE_TRI_BUDGET: 18.4M Micro-Tris',
    codeSnippet: `// Phase 03: UE5.4 Real-Time Production Staging Manifest
export interface StagedOutputManifest {
  engine: "Unreal Engine 5.4.3 Nanite",
  polyBudget: "18.4M Nanite Micro-tris",
  shadingModel: "Subsurface Profile (Burley SSS)",
  lumenVolumetrics: "Raymarched Thin-Film Caustics",
  targetFrameRate: "120 FPS Locked",
  lodCascadeStatus: "AUTOMATED_VERIFIED_LOD0_DNA"
}`,
  },
];

interface PipelineSimulatorPreset {
  id: string;
  label: string;
  pillar: string;
  prompt: string;
  mcpTool: string;
  mcpPayload: string;
  codeOutput: string;
  telemetry: {
    latency: string;
    cacheHit: string;
    evalPass: string;
    engine: string;
  };
}

const SIMULATOR_PRESETS: PipelineSimulatorPreset[] = [
  {
    id: 'dermal-shader',
    label: '1. Subsurface Dermal Shader',
    pillar: 'PILLAR 03 // DIGITAL HUMANS',
    prompt:
      'Synthesize dual-lobe OSL dermal shader with epidermal vascular scattering (IOR 1.41), 98 FACS blendshape displacement compatibility, and dual-phase micro-porous roughness map.',
    mcpTool: 'mcp__holdmedia_3d__compile_osl_shader',
    mcpPayload: `{
  "server": "mcp__holdmedia_3d",
  "tool": "compile_osl_shader",
  "parameters": {
    "target": "Octane_Spectral_v2024",
    "material_type": "Subsurface_Dermal_DualLobe",
    "ior": 1.41,
    "melanin_depth_mm": 1.42,
    "sss_radius": [0.48, 0.18, 0.09],
    "facs_mesh_target": "MetaHuman_LOD0_DNA"
  }
}`,
    codeOutput: `// OSL: Dermal Subsurface Scatter Shader (Synthesized via Claude Sonnet 4.5)
shader DermalSubsurfaceScatter(
    color MelaninBase = color(0.85, 0.62, 0.51),
    float EpidermalIOR = 1.41,
    float DermalAbsorption = 1.42,
    output closure color BSDF = 0
) {
    closure color diffuse_lobe = bssrdf("diffusion", N, DermalAbsorption);
    closure color specular_lobe = microfacet("ggx", N, vector(0.04), 0.12, EpidermalIOR);
    BSDF = MelaninBase * diffuse_lobe + specular_lobe;
}`,
    telemetry: {
      latency: '42ms',
      cacheHit: '94.2% HIT',
      evalPass: '98.4%',
      engine: 'Octane Spectral Path Tracer (v2024.1)',
    },
  },
  {
    id: 'vex-shear',
    label: '2. Houdini VEX Classical Shear',
    pillar: 'PILLAR 01 // CULTURAL DISRUPTION',
    prompt:
      'Generate procedural Houdini VEX graph slicing classical Hellenistic marble along high-frequency generative boolean waveforms, preserving UV registers on inner crimson fissures.',
    mcpTool: 'mcp__houdini__generate_vex_graph',
    mcpPayload: `{
  "server": "mcp__holdmedia_3d",
  "tool": "generate_vex_graph",
  "parameters": {
    "engine": "Houdini_20.5_KineFX",
    "geometry": "Hellenic_Bust_Antique_Scan",
    "slicing_planes": 16,
    "noise_type": "curl_noise_3d",
    "fissure_emission_rgb": [0.898, 0.098, 0.216]
  }
}`,
    codeOutput: `// Houdini VEX: Boolean Waveform Fracture (mcp__houdini__generate_vex_graph)
vector pos = @P;
float noise_val = curlnoise(pos * chf("freq") + chv("offset")).x;
float slice_plane = sin(pos.y * chf("density") + noise_val);
if (slice_plane > chf("threshold")) {
    @Cd = chv("crimson_fissure"); // #E51937
    @group_fracture = 1;
    @N += normalize(noise_val) * chf("shear_force");
}`,
    telemetry: {
      latency: '56ms',
      cacheHit: '96.8% HIT',
      evalPass: '100% Manifold',
      engine: 'Houdini 20.5 Procedural Core',
    },
  },
  {
    id: 'nanite-cavern',
    label: '3. UE5.4 Nanite Cavern Volumetrics',
    pillar: 'PILLAR 04 // CINEMATIC WORLD-BUILDING',
    prompt:
      'Stage procedural flooded subterranean basalt cavern in Unreal Engine 5.4 with 4 levitating metallic discs, volumetric raymarched caustics, and Nanite micro-polygon clustering.',
    mcpTool: 'mcp__ue5__stage_nanite_scene',
    mcpPayload: `{
  "server": "mcp__holdmedia_3d",
  "tool": "stage_nanite_scene",
  "parameters": {
    "target": "UnrealEngine_5.4",
    "scene_type": "Subterranean_Reservoir_LOD0",
    "nanite_poly_budget": "18.4M Micro-Tris",
    "lumen_caustics": true,
    "raymarch_steps": 128,
    "levitating_disc_equilibrium": 4
  }
}`,
    codeOutput: `# UE5.4 Automation: Nanite Cavern & Lumen Volumetrics (mcp__ue5__stage_nanite_scene)
import unreal
world = unreal.EditorLevelLibrary.get_editor_world()
cavern = unreal.AssetEditorSubsystem().load_asset("/Game/Cinematic/Cavern_Nanite")
unreal.EditorLevelLibrary.spawn_actor_from_object(cavern, location=[0, 0, 0])
post_process = unreal.PostProcessVolume()
post_process.settings.lumen_ray_tracing = True
post_process.settings.volumetric_scattering_intensity = 1.45
print("Staged 18.4M Nanite micro-polygons @ 120 FPS locked.")`,
    telemetry: {
      latency: '38ms',
      cacheHit: '98.1% HIT',
      evalPass: '99.8% Stability',
      engine: 'Unreal Engine 5.4.3 Nanite & Lumen',
    },
  },
  {
    id: 'automotive-chaos',
    label: '4. Automotive Clearcoat & Chaos Physics',
    pillar: 'PILLAR 05 // AUTOMOTIVE CGI',
    prompt:
      'Configure 1:1 Rotiform CAD Sub-D bevel weights, compile dual-lobe metallic car paint clearcoat (IOR 1.52, 45µm specular flakes), and stage UE5.4 Chaos Vehicle highway physics telemetry.',
    mcpTool: 'mcp__ue5__configure_chaos_vehicle_rig',
    mcpPayload: `{
  "server": "mcp__holdmedia_3d",
  "tool": "configure_chaos_vehicle_rig",
  "parameters": {
    "target": "UnrealEngine_5.4_Chaos",
    "vehicle_model": "Mercedes_AMG_C63_Coupe",
    "wheel_spec": "Rotiform_DTM_20x10.5J_Centerlock",
    "shader": {
      "type": "DualLobe_Metallic_Clearcoat",
      "ior": 1.52,
      "flake_microns": 45,
      "octane_spectral_lut": "AMG_Graphite_Metallic"
    },
    "suspension": "Chaos_MultiLink_Stiff",
    "target_velocity_kph": 185
  }
}`,
    codeOutput: `// UE5.4 Chaos Rig & Octane Clearcoat (mcp__ue5__configure_chaos_vehicle_rig)
import unreal
vehicle = unreal.load_asset("/Game/Vehicles/AMG_C63_Coupe")
chaos_rig = unreal.ChaosVehicleMovementComponent.cast(vehicle.movement_component)
chaos_rig.set_wheel_setup(rotiform_dtm_centerlock)
clearcoat_mat = unreal.load_asset("/Game/Shaders/M_DualLobe_Clearcoat_152")
clearcoat_mat.set_scalar_parameter_value("ClearcoatRoughness", 0.08)
print("Chaos Vehicle Physics & Dual-Lobe Clearcoat (IOR 1.52) compiled @ 120 FPS.")`,
    telemetry: {
      latency: '34ms',
      cacheHit: '97.4% HIT',
      evalPass: '100% Validated',
      engine: 'Unreal Engine 5.4 Chaos & Octane Spectral',
    },
  },
];

export function AiPipelineSection() {
  const [selectedPresetId, setSelectedPresetId] = useState<string>('dermal-shader');

  const currentPreset =
    SIMULATOR_PRESETS.find((p) => p.id === selectedPresetId) || SIMULATOR_PRESETS[0];

  return (
    <section
      id="ai-pipeline"
      data-color="#0C0B0A"
      data-text="#FAF7F2"
      className="panel relative w-full min-h-screen py-14 sm:py-16 px-4 sm:px-6 lg:px-12 bg-[#0C0B0A] text-[#FAF7F2] overflow-hidden transition-colors duration-500"
    >
      {/* SECTION CONTAINER */}
      <div className="max-w-7xl mx-auto flex flex-col gap-10 md:gap-12 relative z-10">
        
        {/* 1. SECTION HEADER (ANTHROPIC WARM TECH VIBE) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 pb-6 border-b border-[#262422]">
          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-none bg-[#1C1A18] border border-[#332E29] text-xs font-mono text-[#D97706]">
              <Sparkle size={14} weight="fill" className="text-[#E05318]" />
              <span className="font-semibold tracking-wide uppercase">
                The AI Pipeline (The Claude Startups Pitch)
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight font-sans text-[#F5F2EB] leading-[1.08]">
              Powered by AI.{' '}
              <span className="block text-[#E05318]">
                Built for Scale.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-[#A8A29E] font-sans leading-relaxed max-w-2xl font-normal">
              Hold Media operates at the intersection of human artistry and artificial intelligence.
              By integrating large language models like Claude directly into our creative pipeline,
              we accelerate our workflow—from generating narrative world-building concepts and material
              prompt engineering, to automating our studio’s client communications and technical documentation.
              We are building the blueprint for the AI-native design studio.
            </p>
          </div>
        </div>

        {/* 2. TECHNICAL FLOWCHART (CLOSED LOOP) */}
        <div className="space-y-5">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#8A847C]">
                <ArrowsClockwise size={14} className="text-[#E05318] animate-spin" style={{ animationDuration: '6s' }} />
                <span>Synchronous Closed-Loop Architecture</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-sans text-[#F5F2EB] mt-1">
                The AI-Native Studio Pipeline
              </h3>
            </div>
          </div>

          {/* FLOWCHART WIREFRAME BOARD */}
          <div className="relative rounded-none bg-[#141211] border border-[#282522] p-5 lg:p-7 shadow-2xl overflow-hidden">
            
            {/* Subtle flowchart background grid - strictly background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#262320_1px,transparent_1px),linear-gradient(to_bottom,#262320_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-25 pointer-events-none z-0" />

            {/* 3 Passive Architectural Node Cards */}
            <div className="relative grid grid-cols-1 md:grid-cols-3 gap-4 z-10">
              {FLOW_NODES.map((node, index) => {
                const Icon = node.icon;

                return (
                  <div
                    key={node.id}
                    className="cursor-default rounded-none p-5 relative border bg-[#1A1816] border-[#2A2724] shadow-md select-none transition-colors"
                  >
                    {/* Header: Step & Badge */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="text-xs font-mono font-semibold tracking-wider text-[#8A847C]">
                        {node.step}
                      </span>
                      <span
                        className="px-2 py-0.5 rounded-none text-[10px] font-mono font-medium"
                        style={{
                          backgroundColor: `${node.color}22`,
                          color: node.color,
                        }}
                      >
                        {node.tag}
                      </span>
                    </div>

                    {/* Node Icon & Title */}
                    <div className="flex items-center gap-3.5 mb-3">
                      <div
                        className="w-11 h-11 rounded-none flex items-center justify-center shrink-0"
                        style={{
                          backgroundColor: `${node.color}22`,
                          color: node.color,
                        }}
                      >
                        <Icon size={24} weight="regular" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold font-sans text-[#F5F2EB]">
                          {node.title}
                        </h4>
                        <p className="text-xs text-[#9C948A] font-sans">
                          {node.subtitle}
                        </p>
                      </div>
                    </div>

                    {/* Details bullet points */}
                    <ul className="space-y-2 mt-4 text-xs text-[#A8A29E] font-sans">
                      {node.details.map((detail, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-2">
                          <span
                            className="mt-1 w-1.5 h-1.5 rounded-none shrink-0"
                            style={{ backgroundColor: node.color }}
                          />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Bottom metric highlight */}
                    <div className="mt-5 pt-3.5 border-t border-[#262422] flex items-center justify-between text-xs font-mono">
                      <span className="text-[#8A847C]">{node.metrics.label}</span>
                      <span className="font-bold text-[#F5F2EB]">{node.metrics.value}</span>
                    </div>

                    {/* Desktop Step Flow Connectors (Passive Conduit Glyphs) */}
                    {index < 2 && (
                      <div
                        aria-hidden="true"
                        className="hidden md:flex absolute -right-3.5 top-1/2 -translate-y-1/2 z-20 w-7 h-7 rounded-none bg-[#24211E] border border-[#3A3632] shadow-md items-center justify-center text-[#E05318] pointer-events-none select-none"
                      >
                        <ArrowRight size={13} weight="bold" />
                      </div>
                    )}
                    {index === 2 && (
                      <div
                        aria-hidden="true"
                        className="hidden md:flex absolute -right-3.5 top-1/2 -translate-y-1/2 z-20 w-7 h-7 rounded-none bg-[#24211E] border border-[#3A3632] shadow-md items-center justify-center text-[#D97706] pointer-events-none select-none"
                        title="Continuous Feedback Loop to Ideation"
                      >
                        <ArrowsClockwise size={13} weight="bold" className="animate-spin" style={{ animationDuration: '6s' }} />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* SEAMLESS CLOSED-LOOP WIREFRAME RAIL */}
            <div className="relative mt-8 pt-6 border-t border-[#262422] bg-[#181614] rounded-none p-4 border border-[#282522] flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono z-10">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-none bg-[#C2410C]/15 text-[#E05318] flex items-center justify-center shrink-0">
                  <ArrowsClockwise size={18} weight="bold" className="animate-spin" style={{ animationDuration: '8s' }} />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-[#F5F2EB]">Closed Autonomous Feedback Loop:</span>
                    <span className="px-1.5 py-0.5 rounded-none bg-[#10B981]/15 text-[#34D399] text-[10px] font-bold">ACTIVE LOOP</span>
                  </div>
                  <p className="text-[11px] text-[#8A847C] mt-0.5">
                    [01] Ideation Lore ➔ [02] Claude Sonnet 4.5 Pipeline ➔ [03] 3D Staged Output ↺ Telemetry & Prompt Feedback Loop
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 shrink-0 text-[11px]">
                <span className="px-2.5 py-1 rounded-none bg-[#201E1B] border border-[#36322D] text-[#A8A29E] font-medium shadow-xs">Claude Sonnet 4.5 API</span>
                <span className="px-2.5 py-1 rounded-none bg-[#201E1B] border border-[#36322D] text-[#A8A29E] font-medium shadow-xs">UE5 Automation</span>
                <span className="px-2.5 py-1 rounded-none bg-[#201E1B] border border-[#36322D] text-[#A8A29E] font-medium shadow-xs">Octane Path Tracer</span>
              </div>
            </div>

            {/* INTERACTIVE PROMPT-TO-3D PIPELINE SIMULATOR CONSOLE */}
            <div className="relative z-10 mt-6 rounded-none bg-[#0D0C0B] text-[#FAF7F2] p-5 font-mono text-xs border border-[#2D2A26] shadow-2xl">
              {/* Console Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-4 border-b border-[#2C2926] gap-3">
                <div className="flex items-center gap-2.5">
                  <TerminalWindow size={18} className="text-[#D97706]" weight="bold" />
                  <div>
                    <span className="text-[#FAF7F2] font-bold tracking-wider">
                      HOLD MEDIA 3D MCP SERVER (mcp__holdmedia_3d)
                    </span>
                    <span className="hidden sm:inline text-[#8A847C] ml-2">// PROMPT-TO-3D PIPELINE SIMULATOR</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="inline-block w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                  <span className="text-[#10B981] font-mono text-[11px] font-bold">
                    ONLINE // MCP JSON-RPC 2.0
                  </span>
                </div>
              </div>

              {/* Interactive Preset Controls */}
              <div className="mb-4">
                <div className="text-[10px] text-[#8A847C] uppercase tracking-wider mb-2 font-mono">
                  SELECT LIVE PORTFOLIO PROMPT PRESET:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
                  {SIMULATOR_PRESETS.map((preset) => {
                    const isSelected = selectedPresetId === preset.id;
                    return (
                      <button
                        key={preset.id}
                        type="button"
                        onClick={() => setSelectedPresetId(preset.id)}
                        className={`text-left px-3 py-2.5 rounded-none font-mono text-xs transition-all cursor-pointer border ${
                          isSelected
                            ? 'bg-[#C2410C] text-white border-[#C2410C] font-bold shadow-md'
                            : 'bg-[#1C1A18] hover:bg-[#25221F] text-[#B8B0A5] border-[#383531] hover:border-[#D97706]/50'
                        }`}
                      >
                        <div className="text-[10px] uppercase opacity-75">{preset.pillar.split('//')[1]?.trim() || preset.pillar}</div>
                        <div className="truncate mt-0.5">{preset.label}</div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Prompt Transmission Bar */}
              <div className="mb-4 p-3 bg-[#1B1917] border border-[#2D2A26] rounded-none">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="px-1.5 py-0.5 rounded-none bg-[#C2410C]/20 text-[#D97706] text-[10px] font-bold">
                    NATURAL LANGUAGE PROMPT
                  </span>
                  <span className="text-[10px] text-[#706B63] font-mono">
                    TOOL: {currentPreset.mcpTool}
                  </span>
                </div>
                <p className="text-xs text-[#E7E2D9] font-mono leading-relaxed">
                  &ldquo;{currentPreset.prompt}&rdquo;
                </p>
              </div>

              {/* Split Dual-Pane View: MCP Tool-Call & Code Output */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 mb-4">
                {/* Left Pane: MCP Tool-Call JSON */}
                <div className="bg-[#0C0B0A] border border-[#282522] rounded-none overflow-hidden">
                  <div className="flex items-center justify-between px-3 py-1.5 bg-[#171513] border-b border-[#282522] text-[11px] text-[#8A847C]">
                    <span className="font-bold text-[#D97706]">MCP Tool-Call Request</span>
                    <span>json-rpc: 2.0</span>
                  </div>
                  <pre className="p-3 text-[11px] font-mono text-[#7DD3FC] overflow-x-auto max-h-56 leading-relaxed">
                    <code>{currentPreset.mcpPayload}</code>
                  </pre>
                </div>

                {/* Right Pane: Synthesized Code Output */}
                <div className="bg-[#0C0B0A] border border-[#282522] rounded-none overflow-hidden">
                  <div className="flex items-center justify-between px-3 py-1.5 bg-[#171513] border-b border-[#282522] text-[11px] text-[#8A847C]">
                    <span className="font-bold text-[#10B981]">Compiled Artifact Output</span>
                    <span>status: eval_pass</span>
                  </div>
                  <pre className="p-3 text-[11px] font-mono text-[#86EFAC] overflow-x-auto max-h-56 leading-relaxed">
                    <code>{currentPreset.codeOutput}</code>
                  </pre>
                </div>
              </div>

              {/* Live Telemetry Metrics Strip */}
              <div className="pt-3 border-t border-[#2C2926] grid grid-cols-2 sm:grid-cols-4 gap-2 text-[11px]">
                <div className="p-2 bg-[#1A1816] border border-[#2D2A26]">
                  <span className="text-[#8A847C] block text-[10px]">MCP ROUND-TRIP</span>
                  <span className="font-bold text-[#F3EFEA]">{currentPreset.telemetry.latency}</span>
                </div>
                <div className="p-2 bg-[#1A1816] border border-[#2D2A26]">
                  <span className="text-[#8A847C] block text-[10px]">PROMPT CACHE HIT</span>
                  <span className="font-bold text-[#10B981]">{currentPreset.telemetry.cacheHit}</span>
                </div>
                <div className="p-2 bg-[#1A1816] border border-[#2D2A26]">
                  <span className="text-[#8A847C] block text-[10px]">SHADER EVAL PASS</span>
                  <span className="font-bold text-[#38BDF8]">{currentPreset.telemetry.evalPass}</span>
                </div>
                <div className="p-2 bg-[#1A1816] border border-[#2D2A26]">
                  <span className="text-[#8A847C] block text-[10px]">RUNTIME ENGINE</span>
                  <span className="font-bold text-[#D97706] truncate block">{currentPreset.telemetry.engine}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3. CLAUDE STARTUPS PROGRAM VALUE PILLARS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
          <div className="p-4 sm:p-5 rounded-none bg-[#141211] border border-[#282522] space-y-1.5 shadow-md">
            <span className="text-xs font-mono font-semibold text-[#D97706]">01 // NARRATIVE ACCELERATION</span>
            <h4 className="text-lg font-bold font-sans text-[#F5F2EB]">Deep Lore in Minutes</h4>
            <p className="text-xs sm:text-sm text-[#A8A29E] font-sans leading-relaxed">
              Claude creates multi-layered fictional environments, historical subversions, and character profiles ready for production modeling.
            </p>
          </div>

          <div className="p-4 sm:p-5 rounded-none bg-[#141211] border border-[#282522] space-y-1.5 shadow-md">
            <span className="text-xs font-mono font-semibold text-[#D97706]">02 // SHADER & SCRIPT SYNTHESIS</span>
            <h4 className="text-lg font-bold font-sans text-[#F5F2EB]">Procedural Engine Math</h4>
            <p className="text-xs sm:text-sm text-[#A8A29E] font-sans leading-relaxed">
              Automated HLSL/GLSL shader codes and Unreal Engine Python scripts directly generated and verified with Claude Sonnet 4.5.
            </p>
          </div>

          <div className="p-4 sm:p-5 rounded-none bg-[#141211] border border-[#282522] space-y-1.5 shadow-md">
            <span className="text-xs font-mono font-semibold text-[#D97706]">03 // SCALE & COMMS</span>
            <h4 className="text-lg font-bold font-sans text-[#F5F2EB]">AI-Native Studio Ops</h4>
            <p className="text-xs sm:text-sm text-[#A8A29E] font-sans leading-relaxed">
              Client briefs, revision tracking, project schedules, and milestone deliveries handled autonomously by our fine-tuned agents.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
