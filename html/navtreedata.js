/*
 @licstart  The following is the entire license notice for the JavaScript code in this file.

 The MIT License (MIT)

 Copyright (C) 1997-2020 by Dimitri van Heesch

 Permission is hereby granted, free of charge, to any person obtaining a copy of this software
 and associated documentation files (the "Software"), to deal in the Software without restriction,
 including without limitation the rights to use, copy, modify, merge, publish, distribute,
 sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all copies or
 substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING
 BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
 DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

 @licend  The above is the entire license notice for the JavaScript code in this file
*/
var NAVTREE =
[
  [ "JUCE", "index.html", [
    [ "API reference", "index.html", null ],
    [ "The JUCE CMake API", "de/d3e/md_build__c_make__a_p_i.html", [
      [ "System Requirements", "de/d3e/md_build__c_make__a_p_i.html#autotoc_md1", null ],
      [ "Getting Started", "de/d3e/md_build__c_make__a_p_i.html#autotoc_md2", [
        [ "Using <tt>add_subdirectory</tt>", "de/d3e/md_build__c_make__a_p_i.html#autotoc_md3", null ],
        [ "Using <tt>find_package</tt>", "de/d3e/md_build__c_make__a_p_i.html#autotoc_md4", null ],
        [ "Example projects", "de/d3e/md_build__c_make__a_p_i.html#autotoc_md5", null ],
        [ "Building for iOS", "de/d3e/md_build__c_make__a_p_i.html#autotoc_md6", [
          [ "Archiving for iOS", "de/d3e/md_build__c_make__a_p_i.html#autotoc_md7", null ]
        ] ],
        [ "Building universal binaries for macOS", "de/d3e/md_build__c_make__a_p_i.html#autotoc_md8", null ],
        [ "Building with Clang on Windows", "de/d3e/md_build__c_make__a_p_i.html#autotoc_md9", null ],
        [ "A note about compile definitions", "de/d3e/md_build__c_make__a_p_i.html#autotoc_md10", null ]
      ] ],
      [ "API Reference", "de/d3e/md_build__c_make__a_p_i.html#autotoc_md11", [
        [ "Options", "de/d3e/md_build__c_make__a_p_i.html#autotoc_md12", [
          [ "<tt>JUCE_BUILD_EXTRAS</tt>", "de/d3e/md_build__c_make__a_p_i.html#autotoc_md13", null ],
          [ "<tt>JUCE_BUILD_EXAMPLES</tt>", "de/d3e/md_build__c_make__a_p_i.html#autotoc_md14", null ],
          [ "<tt>JUCE_ENABLE_MODULE_SOURCE_GROUPS</tt>", "de/d3e/md_build__c_make__a_p_i.html#autotoc_md15", null ],
          [ "<tt>JUCE_COPY_PLUGIN_AFTER_BUILD</tt>", "de/d3e/md_build__c_make__a_p_i.html#autotoc_md16", null ]
        ] ],
        [ "Functions", "de/d3e/md_build__c_make__a_p_i.html#autotoc_md17", [
          [ "<tt>juce_add_<target></tt>", "de/d3e/md_build__c_make__a_p_i.html#autotoc_md18", null ],
          [ "<tt>juce_add_binary_data</tt>", "de/d3e/md_build__c_make__a_p_i.html#autotoc_md19", null ],
          [ "<tt>juce_add_bundle_resources_directory</tt>", "de/d3e/md_build__c_make__a_p_i.html#autotoc_md20", null ],
          [ "<tt>juce_generate_juce_header</tt>", "de/d3e/md_build__c_make__a_p_i.html#autotoc_md21", null ],
          [ "<tt>juce_enable_copy_plugin_step</tt>", "de/d3e/md_build__c_make__a_p_i.html#autotoc_md22", null ],
          [ "<tt>juce_set_<kind>_sdk_path</tt>", "de/d3e/md_build__c_make__a_p_i.html#autotoc_md23", null ],
          [ "<tt>juce_add_module</tt>", "de/d3e/md_build__c_make__a_p_i.html#autotoc_md24", null ],
          [ "<tt>juce_add_pip</tt>", "de/d3e/md_build__c_make__a_p_i.html#autotoc_md25", null ],
          [ "<tt>juce_disable_default_flags</tt>", "de/d3e/md_build__c_make__a_p_i.html#autotoc_md26", null ]
        ] ],
        [ "Targets", "de/d3e/md_build__c_make__a_p_i.html#autotoc_md27", [
          [ "<tt>juce::juce_recommended_warning_flags</tt>", "de/d3e/md_build__c_make__a_p_i.html#autotoc_md28", null ],
          [ "<tt>juce::juce_recommended_config_flags</tt>", "de/d3e/md_build__c_make__a_p_i.html#autotoc_md29", null ],
          [ "<tt>juce::juce_recommended_lto_flags</tt>", "de/d3e/md_build__c_make__a_p_i.html#autotoc_md30", null ]
        ] ]
      ] ]
    ] ],
    [ "The JUCE Module Format", "d7/d36/md_build__j_u_c_e__module__format.html", [
      [ "File structure", "d7/d36/md_build__j_u_c_e__module__format.html#autotoc_md32", [
        [ "Master header file", "d7/d36/md_build__j_u_c_e__module__format.html#autotoc_md33", null ],
        [ "Module CPP files", "d7/d36/md_build__j_u_c_e__module__format.html#autotoc_md34", null ],
        [ "Precompiled libraries", "d7/d36/md_build__j_u_c_e__module__format.html#autotoc_md35", null ]
      ] ],
      [ "The BEGIN_JUCE_MODULE_DECLARATION block", "d7/d36/md_build__j_u_c_e__module__format.html#autotoc_md36", null ]
    ] ],
    [ "README", "d1/d86/md_build_juce_audio_devices_native_oboe__r_e_a_d_m_e.html", null ],
    [ "Vorbis", "d7/d99/md_build_juce_audio_formats_codecs_oggvorbis_libvorbis_1_3_7__r_e_a_d_m_e.html", [
      [ "What's here", "d7/d99/md_build_juce_audio_formats_codecs_oggvorbis_libvorbis_1_3_7__r_e_a_d_m_e.html#autotoc_md38", null ],
      [ "Contact", "d7/d99/md_build_juce_audio_formats_codecs_oggvorbis_libvorbis_1_3_7__r_e_a_d_m_e.html#autotoc_md39", null ],
      [ "Building", "d7/d99/md_build_juce_audio_formats_codecs_oggvorbis_libvorbis_1_3_7__r_e_a_d_m_e.html#autotoc_md40", null ],
      [ "Building with CMake", "d7/d99/md_build_juce_audio_formats_codecs_oggvorbis_libvorbis_1_3_7__r_e_a_d_m_e.html#autotoc_md44", null ],
      [ "License", "d7/d99/md_build_juce_audio_formats_codecs_oggvorbis_libvorbis_1_3_7__r_e_a_d_m_e.html#autotoc_md48", null ]
    ] ],
    [ "Welcome to VST SDK 3 base", "d3/d51/md_build_juce_audio_processors_format_types__v_s_t3__s_d_k_base__r_e_a_d_m_e.html", [
      [ "License & Usage guidelines", "d3/d51/md_build_juce_audio_processors_format_types__v_s_t3__s_d_k_base__r_e_a_d_m_e.html#autotoc_md50", null ]
    ] ],
    [ "JUCE_README", "d8/d7e/md_build_juce_audio_processors_format_types__v_s_t3__s_d_k__j_u_c_e__r_e_a_d_m_e.html", null ],
    [ "Welcome to VST 3 SDK Interfaces", "de/d16/md_build_juce_audio_processors_format_types__v_s_t3__s_d_k_pluginterfaces__r_e_a_d_m_e.html", [
      [ "License & Usage guidelines", "de/d16/md_build_juce_audio_processors_format_types__v_s_t3__s_d_k_pluginterfaces__r_e_a_d_m_e.html#autotoc_md53", null ]
    ] ],
    [ "Welcome to VST 3 SDK public_sdk", "d5/d4e/md_build_juce_audio_processors_format_types__v_s_t3__s_d_k_public_sdk__r_e_a_d_m_e.html", [
      [ "License & Usage guidelines", "d5/d4e/md_build_juce_audio_processors_format_types__v_s_t3__s_d_k_public_sdk__r_e_a_d_m_e.html#autotoc_md56", null ]
    ] ],
    [ "Welcome to VST 3 SDK Interfaces", "d1/dd3/md_build_juce_audio_processors_format_types__v_s_t3__s_d_k__r_e_a_d_m_e.html", [
      [ "License & Usage guidelines", "d1/dd3/md_build_juce_audio_processors_format_types__v_s_t3__s_d_k__r_e_a_d_m_e.html#autotoc_md59", null ]
    ] ],
    [ "Deprecated List", "da/d58/deprecated.html", null ],
    [ "Modules", "modules.html", "modules" ],
    [ "Namespaces", "namespaces.html", [
      [ "Namespace List", "namespaces.html", "namespaces_dup" ],
      [ "Namespace Members", "namespacemembers.html", [
        [ "All", "namespacemembers.html", "namespacemembers_dup" ],
        [ "Functions", "namespacemembers_func.html", "namespacemembers_func" ],
        [ "Variables", "namespacemembers_vars.html", "namespacemembers_vars" ],
        [ "Typedefs", "namespacemembers_type.html", null ],
        [ "Enumerations", "namespacemembers_enum.html", null ],
        [ "Enumerator", "namespacemembers_eval.html", "namespacemembers_eval" ]
      ] ]
    ] ],
    [ "Classes", "annotated.html", [
      [ "Class List", "annotated.html", "annotated_dup" ],
      [ "Class Index", "classes.html", null ],
      [ "Class Hierarchy", "hierarchy.html", "hierarchy" ],
      [ "Class Members", "functions.html", [
        [ "All", "functions.html", "functions_dup" ],
        [ "Functions", "functions_func.html", "functions_func" ],
        [ "Variables", "functions_vars.html", "functions_vars" ],
        [ "Typedefs", "functions_type.html", "functions_type" ],
        [ "Enumerations", "functions_enum.html", "functions_enum" ],
        [ "Enumerator", "functions_eval.html", "functions_eval" ],
        [ "Properties", "functions_prop.html", null ],
        [ "Related Functions", "functions_rela.html", null ]
      ] ]
    ] ],
    [ "Files", "files.html", [
      [ "File List", "files.html", "files_dup" ],
      [ "File Members", "globals.html", [
        [ "All", "globals.html", "globals_dup" ],
        [ "Functions", "globals_func.html", "globals_func" ],
        [ "Variables", "globals_vars.html", "globals_vars" ],
        [ "Typedefs", "globals_type.html", "globals_type" ],
        [ "Enumerations", "globals_enum.html", null ],
        [ "Enumerator", "globals_eval.html", "globals_eval" ],
        [ "Macros", "globals_defs.html", "globals_defs" ]
      ] ]
    ] ]
  ] ]
];

var NAVTREEINDEX =
[
"annotated.html",
"d0/d19/namespace_steinberg_1_1_vst_1_1_channel_context.html#ac8a80f3c8d9483f6d146b5663076e0e4a7130830190ab2ed22c9b324bedebb15a",
"d0/d31/group__juce__core-streams.html#a3cd9133af8d3e6a04b8c983290649909",
"d0/d47/classdsp_1_1_oscillator.html#a6724ce014b15f20d091f8603c85e46b0",
"d0/d64/structjuce_1_1_c_d_reader_helpers_1_1_s_c_s_i___p_a_s_s___t_h_r_o_u_g_h___d_i_r_e_c_t___w_i_t_h___b_u_f_f_e_r.html#ae2dffe5c998c743a01e4e67fee7c2110",
"d0/d7e/struct_push_notifications_1_1_notification.html#a6c4abae95fb5385ac4bf08237dc3a886aa4af9a2a9584b57c0ca2b4ad893d03bb",
"d0/d98/classjuce_1_1_expression_1_1_helpers_1_1_binary_term.html#a403a88512a28133d61ce1c4ebe25b9ba",
"d0/dae/structjuce_1_1_web_view_base.html#a35cf72aa90e6b1223db3011ff83f3e98",
"d0/dc1/group__juce__graphics-contexts.html#a8ffe9daac3c6ddd2f15e47eb3d5cbc35",
"d0/dd7/_version_8h.html#af1a8e02bd71c5899a889e7170366291d",
"d0/df5/group__juce__opengl-opengl.html#a93c27d490ac810bc0faef0796aa05bc4",
"d1/d05/classjuce_1_1_sl_ref.html#a1152321d846f6a1c6d619fa84796dda2",
"d1/d14/class_abstract_fifo_1_1_scoped_read_write.html#a102cfbf1cfd342be976af1e97b9ade27",
"d1/d25/group__juce__core-threads.html#ab06884cb60e1e7231cc0b16ed10d7004",
"d1/d38/struct_audio_processor_value_tree_state_1_1_listener.html#a21ac9e48ca96cfcb608e6222d30b0693",
"d1/d44/juce__gl_8h.html#a1b7391746ad9774870eb0029aac48daa",
"d1/d44/juce__gl_8h.html#a5209d12bd63d940796dd5de0e685e913",
"d1/d44/juce__gl_8h.html#a8a4cb7b1c35490c42bcd6894275905cd",
"d1/d44/juce__gl_8h.html#abdb5bba361e2bba623ae1b838bbe2413",
"d1/d44/juce__gl_8h.html#af5889235f89b8e16137265169ad205c1",
"d1/d4b/classdsp_1_1_audio_block.html#aaf3eb82bdec953dff35e52bcf04e6236",
"d1/d61/classb2_wheel_joint.html#a545f68256e895eebeb769b59caaddcaf",
"d1/d6d/namespacejuce_1_1_linux_error_handling.html#aeb23cef067c52388435b47f73b1b9f29",
"d1/d8a/structjpeg__entropy__encoder.html#aa42cc97f950746e53857b958e00519dd",
"d1/d91/group__flac__format.html#gae922cabe2dc3f81af10cb635cf996114",
"d1/dae/structjuce_1_1_javascript_engine_1_1_root_object_1_1_divide_op.html#abbc0d3a9f48731ada4cbeaf49779b18e",
"d1/dc7/structjuce_1_1_graph_render_sequence.html#a1f7d7a95136a177ea040634f1ffc4ab5",
"d1/dd9/classb2_world.html#af23e93dbf44ebfc3c7ce9dfdc00b8ff7",
"d1/de9/group__juce__core-text.html#a304c7b871b037a619af828a1d1300417",
"d1/de9/group__juce__core-text.html#aabd5ab574e90ad82058de70b01ed0843",
"d1/de9/group__juce__core-text.html#gac63080f46c282d58b2cf9ad5c36ea1bd",
"d1/deb/group__juce__gui__basics-layout.html#a5fcde2b2f676a6031c28cec4a4649f4e",
"d1/deb/group__juce__gui__basics-layout.html#ad3bde0c2287630fda9bfbd398a2d86f9",
"d1/df4/classjuce_1_1_web_kit_symbols.html#af0b5688ca2dc61e17bda286119e8f4c5",
"d2/d0e/deflate_8c.html#ac29a19765f795f3b693faf38fafb5b59",
"d2/d0e/pngpriv_8h.html#ab5b0fe73a298b8d7376c0358917f4c19",
"d2/d27/classjuce_1_1_n_s_view_attachment.html#ae65fde7a0c323d858c0ca41a0e920509",
"d2/d42/group__juce__audio__utils-gui.html#a19729bfda70c97a99a380792e1bfcb68",
"d2/d47/class_f_l_o_w_g_r_a_p_h___o_u_t_e_r___n_a_m_e_s_p_a_c_e_1_1flowgraph_1_1_flow_graph_source.html",
"d2/d51/group__juce__gui__basics-components.html#adf0e34416c088be5e2eadddd3b40ca94",
"d2/d63/group__juce__events-messages.html#af94f78debd3b3d70acade65f50c5058e",
"d2/d68/group__juce__gui__basics-mouse.html#ade6447a100fab338176980f99fa04e8b",
"d2/d77/juce__gl_8cpp.html#a02f1eed1b9f2181217ed1e2e88188a79",
"d2/d77/juce__gl_8cpp.html#ad00ab055c5696be78381ec6f17fc8b9a",
"d2/d94/struct_button_1_1_look_and_feel_methods.html#a06f95e4c63f74cfe3af3f21698c9107a",
"d2/dad/classcom_1_1rmsl_1_1juce_1_1_juce_billing_client.html#a8908316fd0e5c985323a9285a3748c98",
"d2/dcf/structjuce_1_1var_1_1_variant_type_1_1_double_tag.html",
"d2/de0/structjuce_1_1_open_g_l_rendering_1_1_texture_info.html#a5f1c78fb6c810ab93a9c2fedf63816aa",
"d2/dea/group__juce__graphics-colour.html#adfb09bc7b34321939d9ad6b07b76c220",
"d3/d01/classjuce_1_1_open_g_l_context_1_1_cached_image.html#a063aaab6c4acb9f19432f71496ecf80f",
"d3/d1c/block_8c.html",
"d3/d20/structjpeg__d__post__controller.html#adb337adcfe3a314ceac4b626a73d87c3",
"d3/d48/_audio_output_stream_open_s_l_e_s_8cpp.html#a74595dccd567b617998601db7f3689bf",
"d3/d5a/juce___audio_i_o_device_8h_source.html",
"d3/d7b/class_steinberg_1_1_vst_1_1_i_unit_data.html#aaf7af05e3a653dd42d91a705ed035e49",
"d3/d8d/structinternal__state.html#abf9e786c8e5b4ab5d620ab123208034c",
"d3/da9/classjuce_1_1_wasapi_classes_1_1_w_a_s_a_p_i_input_device.html#a136f59a598289b4af2ea9a6b33ea07ff",
"d3/dc6/juce__win32___com_interfaces_8h.html#a2c071487399d21916ec4016e68c3dd47aa6f8843e3814d3cd990ebfa5c06bb498",
"d3/dd3/struct_f_l_a_c_____stream_decoder_private.html#a1a7ce7f0e5ca42a65eefac4e29454b97",
"d3/de5/structjuce_1_1_open_g_l_rendering_1_1_target.html#a04f63f49ed4397fbbef1e74c435f70b1",
"d4/d05/group__juce__audio__basics-audio__play__head.html#df/ddb/class_audio_play_head",
"d4/d20/structjuce_1_1_rendering_helpers_1_1_gradient_pixel_iterators_1_1_transformed_radial.html",
"d4/d32/group__juce__gui__basics-widgets.html#a1d29f3b4c3d964171d03744409cf5692",
"d4/d32/group__juce__gui__basics-widgets.html#a6910e59cbc2aa25a8499a9c7e6593bb1",
"d4/d32/group__juce__gui__basics-widgets.html#abeebe6dbdc6ae466495aabc64eb51d6aad580cdecf3960d0d68904675383bb2ec",
"d4/d33/classjuce_1_1_windows_media_codec_1_1_juce_i_stream.html#a0f97434b0e1969ba2d9f9c4d06992c33",
"d4/d4e/structinflate__state.html#a19f7ae2fe2682cb1163860f6991a107f",
"d4/d4f/classjuce_1_1_web_input_stream_1_1_pimpl.html#ad5cfc558923dedb47dadff75a02adebe",
"d4/d6e/juce__win32___icon_helpers_8cpp.html",
"d4/d73/group__juce__gui__basics-filebrowser.html#adc36f20b224f7fd0d399a83394a83d0f",
"d4/d86/structjuce_1_1_javascript_engine_1_1_root_object_1_1_expression.html#a74e037003c94b4ac31e6594784f40520",
"d4/da9/png_8h.html#a23e5ae79c39c66dcfa701eefd99a635e",
"d4/da9/png_8h.html#aa39af2c67d21408f0258d0848d76a162",
"d4/dae/zlib_8h.html#a9a852d9163cdb10687403d4e79dda06e",
"d4/db7/juce___polynomial_8h.html",
"d4/dd7/classjuce_1_1_x11_symbols.html#a4982c3582a91af3f881379659caddae6",
"d4/dd8/struct_slider_1_1_slider_layout.html#ac5d776afbb9146ffd43a15f48aedaf24",
"d4/deb/jcapimin_8c.html#ad88dab6da14e2bafe13ab4977e5ff9bc",
"d5/d12/classb2_weld_joint.html#a25dc4f3e300ee00a29ca141ac6d894fa",
"d5/d3a/b2_distance_8h.html",
"d5/d59/structjuce_1_1_open_g_l_rendering_1_1_shader_programs_1_1_linear_gradient2_program.html",
"d5/d6e/classjuce_1_1_tree_view_1_1_content_component.html#aedc116bbeb8b963730354cc1eec69b4f",
"d5/d8c/structjuce_1_1_channel_info.html#a2862978890a9d53d69bce5a84fc0b7fd",
"d5/d90/structjuce_1_1_o_s_c_sender_1_1_pimpl.html#ab8ecafde20b291881f8604a9e9838840",
"d5/db0/group__juce__data__structures-undomanager.html#a6f87ee26bf81334bde06e69f347c8d24",
"d5/dbe/class_steinberg_1_1_vst_1_1_i_test_plug_provider2.html",
"d5/dc2/struct_camera_device_1_1_pimpl.html",
"d5/dca/classjuce_1_1_direct2_d_low_level_graphics_context.html#acb3f56e9546061bea7aaa631f37e09b2",
"d5/de1/structb2_joint_def.html#a470f2879b24adb05facbd49f338856fb",
"d6/d03/structjuce_1_1_android_content_uri_output_stream.html#aad12ed55b6c40ab6c1f30f1a1671e66a",
"d6/d1d/group__flac__stream__decoder.html#ga83f1359028e0646c1e50c1aef0d9fd6d",
"d6/d32/jconfig_8h.html#a25c5e3dadd6709e3c6bc1a83425dd5f9",
"d6/d4a/class_steinberg_1_1_vst_1_1_program_list.html#a42975042178088d6f69984201d6ffdf2",
"d6/d50/struct_document_window_1_1_look_and_feel_methods.html#af1db65fa12e1f49caa2dd4ae1145a93a",
"d6/d60/juce___flac_audio_format_8cpp.html",
"d6/d68/ogg_8h.html#ad267f53b9522efe31e1721af11af3fdb",
"d6/d7a/structjuce_1_1_drag_and_drop_helpers_1_1_juce_enum_format_etc.html",
"d6/d8f/structjuce_1_1_text_editor_1_1_iterator.html#acfb17791a4f6b4a71ef74ae72158d819",
"d6/da9/group__juce__audio__devices-midi__io.html#ae54072205364d56260eaa11c7771289f",
"d6/dba/zutil_8h.html",
"d6/dd2/namespace_steinberg_1_1_vst.html#a0964320896aefd72b176d193b377a509aa77e8eef51111e534feab9e6cbf15a05",
"d6/dd5/juce__gles2_8cpp.html#a7e3f9f8302e1d6231499048833cd40c9",
"d6/dd8/group__juce__core-maths.html#a60dbec51bf8fcc775cf40aef3d49ae55",
"d6/ded/structdetail_1_1_type.html",
"d7/d1d/struct_type_helpers_1_1_parameter_type_3_01unsigned_01long_01_4.html",
"d7/d21/group__juce__graphics-geometry.html#a7c90542d3b67752e46b7a208b561bf7a",
"d7/d27/jpeglib_8h.html#a09d560df0c74465938f050dfda9bc320",
"d7/d33/struct_midi_message_1_1_variable_length_value.html#a71b354fc4e11cb596db6a3e7b3aa8a9a",
"d7/d48/group__juce__core-memory.html#ad0755db840fb566a3aeab0e85d53209a",
"d7/d57/juce__win32___audio_c_d_reader_8cpp.html#ad33dbbef98773220cb143c7fbe7a463d",
"d7/d6e/group__juce__graphics-placement.html#afd5464553fd6bb41d697f3fc1d7427eda54aea49f09ca4f2ac6e5c81859067b7d",
"d7/d7c/group__juce__audio__processors-utilities.html#ab84423dbf225cb6dfd63c35b5d525ff9",
"d7/d88/group__juce__gui__extra-misc.html#af6cb45cb738eeb7fc3664646a88a9e8a",
"d7/d98/group__juce__gui__basics-accessibility.html#gaf0f9b00728b0562960667eb5539bfd9c",
"d7/da9/juce___m_p_e_value_8cpp.html",
"d7/db4/class_steinberg_1_1_vst_1_1_string_list_parameter.html#ad25edc86ac0b586e06c2e3b7f5126f7d",
"d7/dcd/namespacejuce.html#a42e5f26f6fd7b644c5f6f44728b0c03b",
"d7/dcd/namespacejuce.html#adfddbc560709675c14d58c4367a5393d",
"d7/df0/structuniversal__midi__packets_1_1_u32_to_u_m_p_handler.html",
"d8/d00/classjuce_1_1_slider_1_1_pimpl.html#a953dbf5de1ed4600b3416b3c1ecb23bc",
"d8/d13/crc_8c.html#a7b374cf78005ecaa55463be292166042",
"d8/d30/class_u_r_l_1_1_input_stream_options.html#a3b71a54c170fbe1853746fd79189590d",
"d8/d30/namespacegl.html#a582a1bfd854475df31e9b121b4c8456b",
"d8/d30/namespacegl.html#acac1bcdec8dd79cee8385959a01f4abc",
"d8/d4d/structmy__comp__master.html#a85aabce3d888eccfaf21eeb8c5cc8606",
"d8/d6a/_utilities_8cpp.html#ac67383a3df0f6e7a51f8415ffd9fdaca",
"d8/d6f/structjuce_1_1_generic_audio_processor_editor_1_1_pimpl.html#a70e95c0686fc30284eadddffbddef5cb",
"d8/d84/window__flac_8c.html#adb38f3128ab656958db2e05ec0b0792b",
"d8/db4/group__juce__video-playback.html#a2d4a5850898a15a5234370c111ddb342",
"d8/dcd/class_steinberg_1_1_vst_1_1_i_edit_controller.html#ab359d3429a9a48d25f94d32ecd22011c",
"d8/de7/juce___p_n_g_loader_8cpp.html#a6c4888c39781dbe88b107ea20dd168e1",
"d8/df1/structlsfit__acc.html#ad21459eeaddd7da027130b622e02bad9",
"d9/d0b/class_label_1_1_listener.html#ad2a3e79ba106bfa64cab523e197b1514",
"d9/d2d/class_audio_processor_graph_1_1_audio_graph_i_o_processor.html#affabd065d2ec794aa7151ba8883d3662",
"d9/d34/group__juce__gui__basics-lookandfeel.html#a646f0af59c220e83de4e060e00baad83",
"d9/d3f/class_c_a_stream_basic_description.html",
"d9/d55/classjuce_1_1_h_w_n_d_component_peer.html#aa2cce365421a73dece682a95c1ae1825",
"d9/d6f/classb2_fixture.html#a670f1f687521666da6e92885754970b7",
"d9/d83/b2_math_8h.html#a33b1b80b1114eb2d03c307b02ca6fdf6",
"d9/d9c/struct_audio_processor_1_1_buses_layout.html#a9bdf40341da9535884c350e1c1f26029",
"d9/dad/group__juce__core-containers.html#a36e26895c1b674105259ae0a3f579636",
"d9/dad/group__juce__core-containers.html#aa8b7f3f0fc9d227a77cd6e0903f99caf",
"d9/db1/structb2_t_o_i_output.html#a94f8b756e060892226ec006db4be7ee3",
"d9/dd2/group__juce__audio__basics-synthesisers.html#aa9421602c148978426c98bf173d5e5c7",
"d9/dde/namespace_steinberg_1_1_vst_1_1_speaker_arr.html#aaa263ecd38504468277a38bbab261a59",
"d9/df0/struct_text_diff_1_1_change.html#a2db8fd1ed38a7607f06afc3ea034d620",
"da/d27/group__juce__gui__basics-positioning.html#a31bd56da083920346e1f0742bd77ae8b",
"da/d33/group__juce__osc-osc.html#ga463c0f796d2c617a2303ce6ac99733f3",
"da/d3f/namespacejuce_1_1_p_n_g_helpers.html",
"da/d51/classoboe_1_1_audio_stream.html#addb945e8ab2bc395cc99c8ae6504c2cd",
"da/d69/classdsp_1_1_ladder_filter.html#a61013085f12cb933b143a7434edea438",
"da/d89/_a_u_view_localized_string_keys_8h.html#a18137708a7b33bd200e29ebcb3ba83bd",
"da/d96/structjuce_1_1dsp_1_1_s_i_m_d_native_ops_3_01float_01_4.html#aa7fd9f39516333a860f8bf11ba5aee2d",
"da/dae/class_a_u_m_i_d_i_base.html#a6f97f7dfa9cb25ccf05690b3d02a127d",
"da/db5/group__juce__audio__processors-processors.html#a8aa01b96a6a612c4f681fe471fe4b4a2",
"da/dc1/jmemsys_8h.html#a7b31776a5d7d5be0ab44c4993a174434",
"da/ddc/group__juce__events-interprocess.html#af91c21f46e434889ce6867814b36f7a9",
"da/ddc/group__juce__gui__basics-windows.html#adbe7b39dc2d141143b8168aae6559bfe",
"da/dee/juce__gles2_8h.html#a08c5da2a5fe417918f1265750515d809",
"da/dee/juce__gles2_8h.html#ab9531f4a776e7073e7a8dffe116609ef",
"da/df6/classuniversal__midi__packets_1_1_packet.html#acb45a0dc9832163131d35f72d21ac259",
"db/d0f/classdsp_1_1_oversampling.html#a4dc35566de88a0375c5ea8118555bb4e",
"db/d20/classuniversal__midi__packets_1_1_view.html",
"db/d36/classjuce_1_1_midi_input_1_1_pimpl.html#a3137e2256660e8da93c53548f497ea72",
"db/d4a/group__juce__audio__basics-sources.html#a2e5c55518a161daf6d36502e1db9f148",
"db/d4d/structjuce_1_1_push_notifications_1_1_pimpl.html#afc7c6b20bfd99f78be9e123fe17a2f9f",
"db/d67/group__juce__audio__plugin__client-_unity.html#ggaa0839934cc74ac792b938e78959e5c09a3fb74333f3c7d388a72417735fe22f8b",
"db/d76/group__juce__gui__basics-commands.html#aeffaac3af6c4922240e1e5e03ad0a1b5",
"db/d8c/classjuce_1_1_key_mapping_editor_component_1_1_change_key_button.html#af57cd4eec484491dc536e05d75e556dd",
"db/dc4/group__juce__audio__formats-codecs.html#a3673ab24fc35a3960be374bbff6a0d80",
"db/dc8/class_steinberg_1_1_vst_1_1_preset_file.html#ab255e63b2799302646d5f60d275706d6",
"db/dd7/group__juce__gui__basics-keyboard.html#a1a101871ea5807602a22c7f9afe677be",
"db/dee/class_audio_data_1_1_u_int8.html#ac04279171be8b595b0f3a6d3baae557f",
"dc/d03/juce___dialog_window_8cpp.html",
"dc/d27/group__juce__graphics-effects.html#a8ffa8313feae185387d68af2983cdeea",
"dc/d37/structjuce_1_1_main_activity_window_layout_listener.html",
"dc/d4d/classjuce_1_1_expression_1_1_helpers_1_1_parser.html#a1b71699ed6e2fe45a5d2a90044adb161",
"dc/d65/classdsp_1_1_matrix.html",
"dc/d7d/struct_slider_1_1_look_and_feel_methods.html#a8f665bb72b9feaccae15fbbb62b50cb1",
"dc/d8e/structjuce_1_1_active_x_helpers_1_1_juce_i_storage.html",
"dc/dac/juce__android___j_n_i_helpers_8h.html#a77ce814e6a25d70cf5c85dfc07cfdcbe",
"dc/dc9/structjuce_1_1_c_d_reader_helpers_1_1_t_o_c_t_r_a_c_k.html#abd8c10a65363865ded1f66bf2393a362",
"dc/de2/class_f_l_o_w_g_r_a_p_h___o_u_t_e_r___n_a_m_e_s_p_a_c_e_1_1flowgraph_1_1_flow_graph_port.html#a135add1e1532a2849ffed01e01162c9d",
"dc/dfb/group__flac__metadata__object.html#gabef3625575b7e4c7257617a27220959a",
"dd/d08/classdsp_1_1_convolution_message_queue.html#a270f44672ddc02df262594f6a0dd1472",
"dd/d31/classjuce_1_1_legacy_audio_parameters_wrapper.html#a2e2a07582d5c23c009442c9f4fbca0c5",
"dd/d4b/juce___network_service_discovery_8h.html",
"dd/d60/classcom_1_1rmsl_1_1juce_1_1_component_peer_view.html#abef3de23f7992915d5bddd852dbf9040",
"dd/d7f/classb2_circle_contact.html#ac0651dda773561b8561b8efa3cd31d5c",
"dd/d96/classb2_shape.html#a4c1f3a9ad6b3150bb90ad9018ca4b1e0a3649c133fa23d5af940705432e9170f2",
"dd/db5/classjuce_1_1_tree_view_1_1_target_group_highlight.html#a192e50ab4371855390d5c05f40a62cd6",
"dd/dcf/juce__mac___message_manager_8mm.html#a0ff23bf31b8954b2b6d62f3bb543c048",
"dd/de5/structjuce_1_1_d_sound_device_list.html#ac5b6b082fa89c0a7e8b2978230f2e43e",
"dd/df8/juce___u_m_p_converters_8h_source.html",
"de/d02/group__juce__audio__basics-midi.html#a47466395fc2296b724defd56076cd5ed",
"de/d0c/classjuce_1_1_u_i_a_invoke_provider.html#ae6ed5c67016c257a80661f180ed7eb7a",
"de/d1d/group__juce__audio__basics-mpe.html#a8f5884bb888b609cc7597e5dfbe06ead",
"de/d37/juce__linux___files_8cpp.html#a66259ec47dafe7941c40a66877864c67",
"de/d55/classjuce_1_1_juce_main_menu_handler.html#a46f77a64a573f63376ba482adf12238b",
"de/d60/structjuce_1_1_rendering_helpers_1_1_edge_table_fillers_1_1_transformed_image_fill.html",
"de/d7f/group__juce__graphics-fonts.html#a2bbf2978fd2447c09adb2438185edd45",
"de/d81/structve__setup__data__template.html#af5709bcc9b67d6f832f0d25f41615a0c",
"de/d95/zconf_8h.html#a7a86a546be6935563bf1f0f13c64bee0",
"de/daa/structpng__struct__def.html#aa4e37c14d96c7057389a7cb2ca839290",
"de/db3/classjuce_1_1_n_s_view_component_peer.html#afca1884fcb2fc5268ec145aaff5bae5f",
"de/db6/vstspeaker_8h.html#aea8fb2e63d819b83b1811645b5f5c0a0",
"de/dc1/group__juce__core-xml.html#a6de1fb43a8b1a33677f095becb212bca",
"de/ddc/group__juce__graphics-images.html#a0294f63700543e11c0f0da85601c7ae5",
"de/de6/juce__neon___s_i_m_d_native_ops_8h_source.html",
"df/d06/classjuce_1_1_multi_choice_property_component_1_1_multi_choice_remapper_source.html#ab07c911cd272c79ebee8b7b1e7a249be",
"df/d1e/class_steinberg_1_1_buffer.html#a9edd97538ce20828cbfbd23d6b887b82",
"df/d2e/classjuce_1_1_rendering_helpers_1_1_saved_state_base.html#a173e019ea15ad2ac8b71e942968983e2",
"df/d39/transupp_8h.html#a3bd91a70e242595a427afbcbafa1e306",
"df/d5a/classjuce_1_1_core_graphics_pixel_data.html#afd5ee15bc3da6b651d30be676d59101f",
"df/d72/_media_session_callback_8java.html",
"df/d90/structjuce_1_1_u_w_p_u_i_view_settings.html#abbb67e4e61bad71b7fe6fff6c2ab21b4",
"df/da5/classoboe_1_1_audio_stream_a_audio.html#aa7dda173622af670d6f9c4616aff2c19",
"df/dc2/class_steinberg_1_1_const_string.html#a4101749c50c5773f1185e997efc96491",
"df/dd6/class_steinberg_1_1_vst_1_1_i_process_context_requirements.html#a631b2025316c1c6e1ddb4a3a4d316f20a9895914c28ee9ca3affeb75b98057cc5",
"df/de6/classjuce_1_1_bela_audio_i_o_device.html#a02678e135348f8a8c2ae854e8e1e5574",
"df/dfd/class_steinberg_1_1_string.html#a9079e6d50c7fabf76f7197954f376a45",
"dir_9e2cfd3d4dbc8c797aa7e600446acf71.html",
"functions_vars_w.html",
"namespacemembers_vars_q.html"
];

var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';